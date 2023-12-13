function cyberReindeer(road, time) {
  let moves = [road];
  let a = 0;
  let b = ".";

  for (let i = 1; i < time; i++) {
    if (i == 5) road = road.replace(/\|/g, "*");
    const newRoad = road.replace(/S[\.\*]/, `${b}S`);
    if (newRoad != road) {
      a++;
      b = road[a];
    }
    road = newRoad;
    moves.push(road);
  }

  return moves;
}

// Ejemplo de uso
const road = "S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/

console.log(result);
