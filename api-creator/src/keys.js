module.exports = {
    mongoUser: process.env.MONGOUSER,
    mongoHost: process.env.MONGOHOST,
    mongoDatabase: process.env.MONGODATABASE,
    mongoPassword: process.env.MONGOPASSWORD,
    mongoPort: process.env.MONGOPORT,
    mongoProtocol: process.env.MONGOPROTOCOL,
    nodeEnv: process.env.NODE_ENV,
    cloudamqpConnectionString: process.env.CLOUDAMQP_URL,
    exchangeName: 'babyprocessing',
    routingKey: 'crawlerNotification',
    imageSmall: 'iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wkRCCw7P5hCNQAAA/BJREFUaN7tml2IVFUcwH+zu5apfWxoghvIpkgIggplRCWeQmIOLYI+CkuGmRKBvsTxJejlhBTRd6hl6IOGTxInDOQI24Osoi65bGVq+FG7fgSrLqzm6Paw/4G7l3vv7O6cuzbL/GGYuXfunnN+5/8//6+dgnHqHNAM3KM2pRE43wTMAmZQ2/JEQw1rIipDDUwOmTQg1EHqIHWQOkgdpA5SjTTdhzkHgH7gH+A3oA/4N5IAtgCLJJF9DHjo/wbSC/wI/AR0WO0vZz1snHoKWA6sBF4VqPtuWh8DrwDrrfb7yxDGqSQAAKz256z2u4B24GXgm6wJCsap68AjOQFcBVYDR6z2pdhCqaCREc8Zpx4Q7ewWs4vK33mCdANrrPa/G6cqLny0YpxaAuwH5kVB8jKtX4BVISGMU8hYJ4Ei8GveptULvGi1P5sEEb1nnGoFlgEzgZJ4sGNW+7/SzLD898apBcBhYE5epvW81f5IHCK6KFnEl8AzwBRxu0MCUwKOA1ut9p1x+BjMSvGCwUE+AgxwJ2li+fw28Nkox/sUeNdqfytFuw8CXwPFkHHkIvCd1f5O/AvZvQKwBfhwDGO+AzxqnNoIDCaY6G3j1LfAklCHfQg4aLXvznClLwHvj2PsduBN2YwRmyPvPwNHQ4EMAPuSgpxcF4APgGnjNVnj1IwkxyHyVSiQfqu9Twp0cr0MeK6K8Rvl7CWZLFb7k6FADmVoo2zr1cq6pJvljQsKkqINgFUB5phtnFqcd/Z7LCMizwKuSHwon5dKkvRMCWgFunIDsdr/USFxbA3oHXPTSCkp+sbMa6gWSt2B0aTltQByd7I0HwoTueCkqjLUGXncOLVzAsrmu8AOq/3RPN3vGxOkkO8nQ1/rtpTPNQ/Sb7XvyxtkUALftcjrauQVQg5k5XOhzsg+q/26DE9zHFha5RyfZMWrUBopGqea47sU2b3Xqxx/u9W+J0kbksovDAXSDKyNpyqRqu4UsHmcY3cB72Wl8MCGkM2HDqDNan89xbymAp+P0VWfBlanldAy7rPAFyG91gtAW9qBtNrfAjYA24DzFca6BOwFVljtu9OiuXFqCvAWMDd0O+hP6Wv1pfWi5PNiKX+fBp4EpkucuAT0AJ1W+xNpWXXkbKyRIHkljwZdh9V+eVZjLXLdKA2JRoZ/SjIYbSdVgFgIdDL8O5revJrYP1jt23JMHBcAJ0STAL15RfbXjFMHjFMtlbLW0WS7EXfeYJwqiiamj0jBjVM3gIdzAupm+J88e632g1mVZBpE5FzNBzYBG4GpsUf7CsapCwx3w/MoR5ukguwRL7THan9zjBppkXZSEZgvt+/Fel5n/gOCZ7TRGijcGwAAAABJRU5ErkJggg==',
    imageBig: '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'
  };