![logo](./graphql.png)

# COVID-19 🦠 API<sup>:mask:</sup>  <img src="https://thumbs.gfycat.com/AjarFloweryJumpingbean-size_restricted.gif" width="60" height="60" />

### A GraphQL Express Server powered by [COVID-19 API]() to provide COVID-19 related stats for India :india:

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


----
```javascript

if (_.isAwesome(thisRepo)) {
  thisRepo.star(); // thanks in advance :p
}

```
----

[![GitHub followers](https://img.shields.io/github/followers/vinitshahdeo.svg?label=Follow%20@vinitshahdeo&style=social)](https://github.com/vinitshahdeo/)  [![Twitter Follow](https://img.shields.io/twitter/follow/Vinit_Shahdeo?style=social)](https://twitter.com/Vinit_Shahdeo)
