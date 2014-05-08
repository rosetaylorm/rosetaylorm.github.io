//Taylor Rose, R03, PS9, Kelley
var departments=[];
var json = [];  
var rootPos = Vector(200,100);
// new data
// 1) find all departments
// 2) create nodes and link to department
function initDataParse(){
	var name;
	var department;
	var salary;
	// create the root node 

	var anode = Node(rootPos, 20, 'Blue');
	anode.id = 'Chicago';
	sim.nodes.push(anode);
	addDepartmentNodes(anode);
	var n = data.length;
	var index;
	var deptNode;
	for(var i=0;i<55;i++){
		name = data[i][14];
		type = data[i][15];
		crime = data[i][16];
		nameNode = findNodeName(type);
		if(nameNode!==null){
			processNode(nameNode,name,3, 'Purple', 7);
		}
	}
}
function findNodeName(name){
	var n = sim.nodes.length;
	for(var i=0;i<55;i++){
		if(sim.nodes[i].id === name)return sim.nodes[i];
	}
	return null;
}
function findDepartment(name){
// loop over all children of root to find department that matches name
	for(var i=0;i<json[0].children.length;i++){
		if(json[0].children[i].name === name) return json[0].children[i];
	}
	return null;
}
function processNode(parentNode,departmentName,treeDepth, size, color){
	var pos = Vector(100+Math.random()*400-100, 100 + (treeDepth*50));
	var nod = Node(pos, size, color);
	nod.id = departmentName;
  sim.nodes.push(nod);
  parentNode.children.push(nod);
  sim.links.push(Link(parentNode,nod));
}
function addDepartmentNodes(root){
	var n = data.length;
	var department;
	var salary;
	var total=[];
	for(var i=0;i<55;i++){
		department = data[i][15];
		salary = parseInt(data[i][16]);
		if(checkNew(department)){
			processNode(root, department, 1, 'Blue', 15);
			departments.push(department);
		}
	}
}


function checkNew(d){
	var n = departments.length;
	for(var i=0;i<n;i++){
		if(departments[i]===d)return false;
	}
	return true;
}

