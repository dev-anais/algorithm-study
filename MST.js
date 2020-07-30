/**refered to https://www.zerocho.com/category/Algorithm/post/584bcd42580277001862f1a7 기존에 작성한 graph 재사용 */
//무방향 그래프 만들기
function insertTwoWayArc(graph, data, from, to) {
  graph.insertArc(data, from, to);
  graph.insertArc(data, to, from);
}

Graph.prototype.mst = function () {
  var first = this.first;
  var inTreeCount = 0;
  while (first) {
    first.inTree = false;
    var arc = first.arc;
    while (arc) {
      arc.inTree = false;
      arc = arc.nextArc;
    }
    first = first.next;
  }
  this.first.inTree = true;
  inTreeCount++;
  var temp = this.first;
  var current;
  var minTemp;
  var minArc;
  while (inTreeCount !== this.count) {
    while (temp) {
      current = temp;
      temp = temp.next;
      if (!current.inTree) continue;
      arc = current.arc;
      while (arc) {
        if (!arc.destination.inTree) {
          if (!minArc) minArc = arc;
          if (minArc.data > arc.data) {
            minArc = arc;
            minTemp = current;
          }
        }
        arc = arc.nextArc;
      }
    }
    minArc.destination.inTree = true;
    minArc.inTree = true;
    inTreeCount++;
    console.log(
      "%s 버텍스에서 %s 버텍스로 향하는 가중치 %d의 아크가 추가되었습니다.",
      minTemp.key,
      minArc.destination.key,
      minArc.data
    );
    minArc = null;
    temp = this.first;
  }
};
