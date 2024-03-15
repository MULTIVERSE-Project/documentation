const defaultMap = "rp_titan_rishi_tsb2";

function SetMapName(mapname) {
  if (mapDetails[mapname].title) {
    document.getElementById("map").innerHTML = mapDetails[mapname].title;
    document.getElementById("map_sub").innerHTML = mapname;
  } else {
    document.getElementById("map_sub").innerHTML = mapname;
    document.getElementById("map_sub").style.fontSize = "21px";
  }
}

SetMapName(defaultMap);
document.getElementById("description").innerHTML =
  mapDetails[defaultMap].desc || "Нет информации об этой планете!";
document.body.style.backgroundImage =
  "url(" + mapDetails[defaultMap].background + ")";

function GameDetails(
  servername,
  serverurl,
  mapname,
  maxplayers,
  steamid,
  gamemode,
  volume,
  language
) {
  if (mapDetails[mapname]) {
    SetMapName(mapname);

    document.getElementById("description").innerHTML =
      mapDetails[mapname].desc || "Нет информации об этой планете!";
    document.body.style.backgroundImage =
      "url(" + mapDetails[mapname].background + ")";
  } else {
    document.getElementById("map").innerHTML = "";
    document.getElementById("map_sub").innerHTML = mapname;
    document.body.style.backgroundImage = "url(./assets/default.jpg)";

    document.getElementById("description").innerHTML = "";
  }

  if (mapname != defaultMap) {
    document.getElementById("event").innerHTML = "ивент на сервере";
    document.getElementById("event").style.fontSize = "21px";
    document.getElementById("event").style.color = "#fbc531";
  }
}
