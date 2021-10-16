# TimerMission

Clone Warehouse Command:
```
git clone https://github.com/lzimul/timer-mission.git
```

Initialization Command:
```
cd timer-mission && npm install
```

Development Command:
```
npm start
```

### Use the instance. 
```
'use strict';

// import dependency
const TimerMission = require ('timer-mission');
/**
* ES6
* import TimerMission from 'timer-mission';
*/

// setting event
const timerMission = new TimerMission([{
  "event": "goToWork",
  "timer": "6:15:0"
}, {
  "event": "goOffWork",
  "timer": "22:30:15"
}]);

// monitor event
timerMission.addEventListener('goToWork', function () {
  console.log(...arguments);
});

timerMission.addEventListener('goOffWork' function () {
  console.log(...arguments);
});
```

```
'use strict';

// import dependency
const TimerMission = require ('timer-mission');
/**
* ES6
* import TimerMission from 'timer-mission';
*/

// definition method class
class Demo extends TimerMission {
  constructor() {
    super(...arguments);
    // monitor event
    super.addEventListener('goToWork', function () {
      console.log(...arguments);
    });
    super.addEventListener('goOffWork' function () {
      console.log(...arguments);
    });
  }
};

new Demo([{
  "event": "goToWork",
  "timer": "6:15:0"
}, {
  "event": "goOffWork",
  "timer": "22:30:15"
}]);
```