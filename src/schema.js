const axios = require('axios').default;

const {
    GraphQLSchema,
    GraphQLString,
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt
} = require('graphql');


const CovidDataType = new GraphQLObjectType({
    name: 'CovidStats',
    fields: () => ({
        active: {
            type: GraphQLInt
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
    })
});

const StateCovidDataType = new GraphQLObjectType({
    name: 'statewise',
    fields: {
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
    fields: {
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
        datewise: {
            type: new GraphQLList(DailyCovidDataType),
            async resolve() {
                const data = await axios.get('https://api.covid19india.org/data.json')
                    .then(res => res.data.cases_time_series);
                return data;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});