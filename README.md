<p align="center">
  <a href="https://graphql.org/"><img src="./graphql.png" /></a>
  <br>
<a href="https://vinitshahdeo.github.io/COVID19/"><img src="https://thumbs.gfycat.com/AjarFloweryJumpingbean-size_restricted.gif" width="60" height="60" /></a>
</p>
<h1 align="center"> <a href="https://vinitshahdeo.github.io/COVID19/">COVID-19</a> 🦠 API<sup>:mask:</sup> </h1>

<p align="center">
<a href="https://github.com/vinitshahdeo/covid19api/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/vinitshahdeo/covid19api?logo=github"></a> <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/vinitshahdeo/covid19api?logo=javascript"> <img alt="GitHub top language" src="https://awesome.re/mentioned-badge.svg">
</p>

### A [GraphQL](https://graphql.org/) Express Server powered by @covid19india/[api](https://github.com/covid19india/api) to provide COVID-19 related stats for India :india:

<p align="center"><a href="https://indiafightscorona.netlify.app/"><img src="./covid19-dashboard.png" /></a></p>

## Setup

```bash
npm install && npm start
```
### Steps Explained

- Open terminal and run `npm install`

- Run `npm start`

- Open browser and go to `http://localhost:8080/graphql`

- Type the [queries](#queries) and enjoy! :smile:

- Run `npm run server` for local development


## Queries

#### `GET` overall COVID-19 stats

```graphql
{ 
  total {
    active
    confirmed
    deaths
    recovered
  }
}
```

#### `GET` statewise COVID-19 stats

```graphql
{
  statewise {
    state
    active
    confirmed
    deaths
    recovered
  }
}
```

#### `GET` datewise COVID-19 stats

```graphql
{
  datewise {
    date
    dailyconfirmed
    dailydeceased
    dailyrecovered
  }
}

```
## Dependencies Used

- [express](https://www.npmjs.com/package/express): A web application framework for [Node.js](https://nodejs.org/)

- [graphql](https://www.npmjs.com/package/graphql): The JavaScript reference implementation for [GraphQL](https://graphql.org/)

- [express-graphql](https://www.npmjs.com/package/express-graphql): A GraphQL HTTP Server middleware

## Related Work

- [COVID-19 Tracker - INDIA](http://corona-cases-india.netlify.com/) - A React App with the following features:
    - Graphs showing daily **confirmed**, **recovered** and **deceased** cases
    - **State-wise** report presented in Map of India
    - Tabular data for global corona cases
    - **Latest news** about COVID-19
    - Additional resources such as symptoms, precautions etc.

- [India Fights Corona -  Get current COVID-19 stats](https://indiafightscorona.netlify.app/)!

- [COVID-19 Tracker - Homepage](https://vinitshahdeo.github.io/COVID19/)

- An [Open Letter](https://github.com/vinitshahdeo/Water-Monitoring-System/issues/236) to all the contributors -  [STAY HOME, STAY SAFE!](https://github.com/vinitshahdeo/COVID19)

## `< />` with ♡ by 

[![](https://sourcerer.io/fame/vinitshahdeo/vinitshahdeo/COVID19/images/0)](https://fayz.in/stories/s/1522/0/?ckt_id=ZGL1ZGVk&title=story_of_vinit_shahdeo)[![](https://sourcerer.io/fame/vinitshahdeo/vinitshahdeo/COVID19/images/1)](https://indiafightscorona.netlify.app/)[![](https://sourcerer.io/fame/vinitshahdeo/vinitshahdeo/COVID19/images/2)](https://github.com/vinitshahdeo/COVID19)[![](https://sourcerer.io/fame/vinitshahdeo/vinitshahdeo/COVID19/images/3)](https://www.linkedin.com/in/vinitshahdeo/)[![](https://sourcerer.io/fame/vinitshahdeo/vinitshahdeo/COVID19/images/4)](http://corona-cases-india.netlify.com/)[![](https://sourcerer.io/fame/vinitshahdeo/vinitshahdeo/COVID19/images/5)](http://corona-cases-india.netlify.com/)[![](https://sourcerer.io/fame/vinitshahdeo/vinitshahdeo/COVID19/images/6)](https://github.com/vinitshahdeo)[![](https://sourcerer.io/fame/vinitshahdeo/vinitshahdeo/COVID19/images/7)](https://fayz.in/stories/s/1522/0/?ckt_id=ZGL1ZGVk&title=story_of_vinit_shahdeo)

#### [Vinit Shahdeo](https://www.eatmy.news/2020/06/code-like-you-eat-i-mean-code-daily-as.html)

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/vinitshahdeo)

## Leave a :star:


Check out **@vinitshahdeo/[COVID19](https://github.com/vinitshahdeo/COVID19)** repository. **Consider leaving a star!** :heart: :hugs:


----
```javascript

if (_.isAwesome(thisRepo)) {
  thisRepo.star(); // thanks in advance :p
}

```
----

[![GitHub followers](https://img.shields.io/github/followers/vinitshahdeo.svg?label=Follow%20@vinitshahdeo&style=social)](https://github.com/vinitshahdeo/)  [![Twitter Follow](https://img.shields.io/twitter/follow/Vinit_Shahdeo?style=social)](https://twitter.com/Vinit_Shahdeo)
