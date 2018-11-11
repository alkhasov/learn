"use strict";

console.clear();

const yellowLog = str =>
  console.log(`%c${str}`, `font-weight:bold; background: yellow`);

//objects

const now = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth();
  let hh = now.getHours() + 1;
  hh = hh < 10 ? (hh = "0" + hh) : hh;
  let mm = now.getMinutes() + 1;
  mm = mm < 10 ? (mm = "0" + mm) : mm;

  return `${day} ${months[month]}, ${hh}:${mm}`;
};

let cat = {
  name: "",
  color: "",
  age: 0,
  satiety: 1,
  thirst: 1,
  loveToOwner: 5,
  isSleeping: false,
  lifeLog: [],
  owner: "",
  meow: function() {
    this.loveToOwner += 1;
    this.lifeLog.push({ date: now(), action: "Meow" });
    console.log("Meow-meow-meow!");
    return this.loveToOwner;
  },
  stroke: function() {
    this.loveToOwner += 1;
    this.lifeLog.push({ date: now(), action: "Some stroking" });
    console.log("Murrrrr..");
    return this.loveToOwner;
  },
  fish: function() {
    this.satiety += 1;
    this.lifeLog.push({ date: now(), action: `Eat fish` });
    console.log(`Love fish! Meow!`);
    return this.satiety;
  },
  water: function() {
    this.thirst += 1;
    console.log(`Cool and fresh! Niaow!`);
    this.lifeLog.push({ date: now(), action: `Drink water` });
    return this.thirst;
  },
  toggleSleep: function() {
    if (this.isSleeping) {
      this.isSleeping = false;
      this.lifeLog.push({ date: now(), action: `Woked up` });
      console.log(`${this.name} woke up`);
      return this.isSleeping;
    } else {
      this.isSleeping = true;
      this.lifeLog.push({ date: now(), action: `Fell asslep` });
      console.log(`${this.name} fell asleep`);
      return this.isSleeping;
    }
  }
};

const newCat = (name, color, owner) => {
  cat.name = name;
  cat.color = color;
  cat.owner = owner;
  cat.lifeLog.push({ date: now(), action: `${name} is born` });
  cat.lifeLog.push({ date: now(), action: `Meet with ${owner}` });
  return `${name} is born!`;
};

function newLogLine(content) {
  let log = document.createElement("li");
  log.className = "log";
  log.innerHTML = content;
  return log;
}

function printLog() {
  let logList = document.createElement("ol");
  logList.className = "log-list";
  document.body.appendChild(logList);

  for (let i = 0; i < cat.lifeLog.length; i++) {
    let content = cat.lifeLog[i].action + " at " + cat.lifeLog[i].date;
    let log = newLogLine(content);
    document.querySelector(".log-list").appendChild(log);
  }
  return "Log printed!";
}
