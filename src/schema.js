const axios = require('axios').default;

const {
    GraphQLSchema,
    GraphQLString,
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
    graphql
} = require('graphql');


const CovidDataType = new GraphQLObjectType({
    name: 'CovidStats',
    fields: () => ({
        active: {
            type: GraphQLInt
        },
        confirmed: {
            type: GraphQLInt
        },
        deaths: {
            type: GraphQLInt
        },
        recovered: {
            type: GraphQLInt
        }
    })
});

const StateCovidDataType = new GraphQLObjectType({
    name: 'statewise',
    fields: {
        state: {
            type: GraphQLString
        },
        active: {
            type: GraphQLInt
        },
        confirmed: {
            type: GraphQLInt
        },
        deaths: {
            type: GraphQLInt
        },
        recovered: {
            type: GraphQLInt
        }
    }
});

const StateCodeCovidDataType = new GraphQLObjectType({
    name: 'stateCodewise',
    fields: {
        stateCode: {
            type: GraphQLString
        },
        state: {
            type: GraphQLString
        },
        active: {
            type: GraphQLString
        },
        confirmed: {
            type: GraphQLString
        },
        deaths: {
            type: GraphQLString
        },
        recovered: {
            type: GraphQLString
        }
    }
});

const DailyCovidDataType = new GraphQLObjectType({
    name: 'daily',
    fields: {
        date: {
            type: GraphQLString
        },
        dailyconfirmed: {
            type: GraphQLInt
        },
        dailydeceased: {
            type: GraphQLInt
        },
        dailyrecovered: {
            type: GraphQLInt
        }
    }
});

/**
 * Total data
 */
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: function () {
        return {

            total: {
                type: CovidDataType,
                async resolve() {
                    const data = await axios.get('https://api.covid19india.org/data.json')
                        .then(res => res.data.statewise[0]);
                    return data;
                }
            },
            statewise: {
                type: new GraphQLList(StateCovidDataType),
                async resolve() {
                    const data = await axios.get('https://api.covid19india.org/data.json')
                        .then(res => res.data.statewise.splice(1));
                    return data;
                }
            },
            //You have to pass variable stateCode
            //query Example:
            // query($stateCode:String!){
            //     stateCodewise(stateCode:$stateCode){
            //     state
            //     active
            //     confirmed
            //     deaths
            //     recovered
            //   }
            // }
            //variable Example
            // {
            //     "stateCode":"MP"
            // }
            stateCodewise: {
                type: new GraphQLList(StateCodeCovidDataType),
                args: {
                    stateCode: {
                        type: new GraphQLNonNull(GraphQLString),
                    },
                },
                async resolve(root, args) {
                    const data = await axios.get('https://api.covid19india.org/data.json')
                        .then(res => res.data.statewise.splice(1));
                    let ret = data.filter(x => x.statecode == args.stateCode);
                    return ret;
                }
            },
            datewise: {
                type: new GraphQLList(DailyCovidDataType),
                async resolve() {
                    const data = await axios.get('https://api.covid19india.org/data.json')
                        .then(res => res.data.cases_time_series);
                    return data;
                }
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});