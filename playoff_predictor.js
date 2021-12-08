
var g1t_input = 0;
var g1b_input = 0;
var g2t_input = 0;
var g2b_input = 0;
var g3t_input = 0;
var g3b_input = 0;
var g4t_input = 0;
var g4b_input = 0;
var g5t_input = 0;
var g5b_input = 0;

var current_records = {
  "1": 8,
  "2": 6,
  "3": 6,
  "4": 6,
  "5": 11,
  "6": 10,
  "7": 5,
  "8": 5,
  "9": 5,
  "10": 3,
};
var current_scores = {
  "1": 1605.88,
  "2": 1346.66,
  "3": 1367.0,
  "4": 1325.9,
  "5": 1686.22,
  "6": 1381.96,
  "7": 1410.38,
  "8": 1418.5,
  "9": 1412.76,
  "10": 1410.46,
};
var updated_records = {
  "1": 8,
  "2": 6,
  "3": 6,
  "4": 6,
  "5": 11,
  "6": 10,
  "7": 5,
  "8": 5,
  "9": 5,
  "10": 3,
};
var updated_scores = {
  "1": 1605.88,
  "2": 1346.66,
  "3": 1367.0,
  "4": 1325.9,
  "5": 1686.22,
  "6": 1381.96,
  "7": 1410.38,
  "8": 1418.5,
  "9": 1412.76,
  "10": 1410.46,
};

function in_top_6(player){
	var num=0;
	for (var key in current_records){
		if (key == player){
			continue;
		}
		if (updated_records[key] < updated_records[player]){
			num += 1;
		}
		if (updated_records[key] ==  updated_records[player] && updated_scores[key] <  updated_scores[player]){
			num += 1;
		}
	}
	if (num>3){
		return false;
	}
	return true;
}

function update(){
	for (var key in current_scores) {
    	updated_scores[key] = current_scores[key];
    	updated_records[key] = current_records[key];
	}
    g1t_input = parseInt(document.getElementById("1").value);
    g1b_input = parseInt(document.getElementById("2").value);
    g2t_input = parseInt(document.getElementById("3").value);
    g2b_input = parseInt(document.getElementById("4").value);
    g3t_input = parseInt(document.getElementById("5").value);
    g3b_input = parseInt(document.getElementById("6").value);
    g4t_input = parseInt(document.getElementById("7").value);
    g4b_input = parseInt(document.getElementById("8").value);
    g5t_input = parseInt(document.getElementById("9").value);
    g5b_input = parseInt(document.getElementById("10").value);
    if (isNaN(g1t_input)){
        g1t_input = 0;
    }
    updated_scores["1"] = current_scores["1"] + g1t_input;
    if (isNaN(g1b_input)){
        g1b_input = 0;
    }
    updated_scores["2"] = current_scores["2"] + g1b_input;
    
    if (g1t_input > g1b_input){
    	updated_records["1"] += 1;
    }
    else {
    	updated_records["2"] += 1;
    }
    
    if (isNaN(g2t_input)){
        g2t_input = 0;
    }
    updated_scores["3"] = current_scores["3"] + g2t_input;
    if (isNaN(g2b_input)){
        g2b_input = 0;
    }
    updated_scores["4"] = current_scores["4"] + g2b_input;
    
    if (g2t_input > g2b_input){
    	updated_records["3"] += 1;
    }
    else {
    	updated_records["4"] += 1;
    }
    
    if (isNaN(g3t_input)){
        g3t_input = 0;
    }
    updated_scores["5"] = current_scores["5"] + g3t_input;
    if (isNaN(g3b_input)){
        g3b_input = 0;
    }
    updated_scores["6"] = current_scores["6"] + g3b_input;
    
    if (g3t_input > g3b_input){
    	updated_records["5"] += 1;
    }
    else {
    	updated_records["6"] += 1;
    }
    
    if (isNaN(g4t_input)){
        g4t_input = 0;
    }
    updated_scores["7"] = current_scores["7"] + g4t_input;
    if (isNaN(g4b_input)){
        g4b_input = 0;
    }
    updated_scores["8"] = current_scores["8"] + g4b_input;
    
    if (g4t_input > g4b_input){
    	updated_records["7"] += 1;
    }
    else {
    	updated_records["8"] += 1;
    }
    
    if (isNaN(g5t_input)){
        g5t_input = 0;
    }
    updated_scores["9"] = current_scores["9"] + g5t_input;
    if (isNaN(g5b_input)){
        g5b_input = 0;
    }
    updated_scores["10"] = current_scores["10"] + g5b_input;
    
    if (g5t_input > g5b_input){
    	updated_records["9"] += 1;
    }
    else {
    	updated_records["10"] += 1;
    }
    
    var string = in_top_6("1") ? "none" : "4px solid #0F0";
    document.getElementById("michael").style.border = string;
    string = in_top_6("2") ? "none" : "4px solid #0F0";
    document.getElementById("derek").style.border = string;
    string = in_top_6("3") ? "none" : "4px solid #0F0";
    document.getElementById("chris").style.border = string;
    string = in_top_6("4") ? "none" : "4px solid #0F0";
    document.getElementById("logan").style.border = string;
    string = in_top_6("5") ? "none" : "4px solid #0F0";
    document.getElementById("adam").style.border = string;
    string = in_top_6("6") ? "none" : "4px solid #0F0";
    document.getElementById("labrian").style.border = string;
    string = in_top_6("7") ? "none" : "4px solid #0F0";
    document.getElementById("tyler").style.border = string;
    string = in_top_6("8") ? "none" : "4px solid #0F0";
    document.getElementById("noah").style.border = string;
    string = in_top_6("9") ? "none" : "4px solid #0F0";
    document.getElementById("kolten").style.border = string;
    string = in_top_6("10") ? "none" : "4px solid #0F0";
    document.getElementById("nathan").style.border = string;
}