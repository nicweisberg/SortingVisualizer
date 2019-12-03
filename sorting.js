var columns = document.getElementsByClassName("sortingColumn");
var columns = Array.prototype.slice.call(columns);
randomize();





/*
// change general to specific name

function generalTimingFunction(start, end, milli){

  var increment = start;

  var myIntervalVar = setInterval(myRepeatingFunction, milli);
  setTimeout(clearFunction, (end-start)*milli);
  
  function clearFunction(){
    clearTimeout(myIntervalVar);
  }
  
  function myRepeatingFunction(){

    // put code or function call here
    console.log("alert" + String(increment));
    // put code or function call here

    increment++;
  }
}
*/








// General Functions

function randomize() {
  for (i = 0; i < columns.length; i++){
    columns[i].style.height = String(Math.floor(Math.random() * 90)+10) + "%";
  }
}

function changeColour(column, color){
    columns[column].style.backgroundColor = color;
}

function changeHeight(element, value){
    element.style.height = value;
}

function compare(element1, element2){
    height1 = element1.style.height;
    height1 = height1.substring(0, height1.length-1);
    height1 = parseInt(height1);
    height2 = element2.style.height;
    height2 = height2.substring(0, height2.length-1);
    height2 = parseInt(height2);
    if (height1>height2){
        return false;
    }else{
        return true;
    }
}

function swap(element1, element2){
    height1 = element1.style.height;
    height2 = element2.style.height;
    element1.style.height = height2;
    element2.style.height = height1;
}



//  Bubble Sorting Functions



function bubbleSort(speed){
  bubbleSortTimingFunction(0,99,speed);
}


function bubbleSortTimingFunction(start, end, milli){

  var increment = start;

  var myIntervalVar = setInterval(myRepeatingFunction, milli);
  setTimeout(clearFunction, (end-start)*milli);
  
  function clearFunction(){
    clearTimeout(myIntervalVar);
  }
  
  function myRepeatingFunction(){

    // put code or function call here
    singlePassBubbleTimingFunction(0,99,4);
    // put code or function call here

    increment++;
  }
}



function singlePassBubbleTimingFunction(start, end, milli){

  var increment = start;

  var myIntervalVar = setInterval(myRepeatingFunction, milli);
  setTimeout(clearFunction, (end-start)*milli);
  
  function clearFunction(){
    clearTimeout(myIntervalVar);
  }
  
  function myRepeatingFunction(){

    // put code or function call here
    if (!(compare(columns[increment], columns[increment+1]))){
      swap(columns[increment], columns[increment+1]);   
    }
    // put code or function call here

    increment++;
  }
}






// Insertion Sort Functions



function insertionSort(speed){
  insertSortTimingFunction(0,99,speed);
}



function singlePassInsertTimingFunction(start, end, milli, largest){

  var increment = start;
  currentLargest = largest;

  var myIntervalVar = setInterval(myRepeatingFunction, milli);
  setTimeout(clearFunction, (end-start+1)*milli);
  
  function clearFunction(){
    clearTimeout(myIntervalVar);
  }
  
  function myRepeatingFunction(){

    // put code or function call here
    if (compare(largest, columns[increment])){
      largest = columns[increment];
      currentLargest = largest;
    }
    if (increment==end){
      swap(columns[end], currentLargest);
    }
    // put code or function call here

    increment++;
  }
}


function insertSortTimingFunction(start, end, milli){

  var increment = start;

  var myIntervalVar = setInterval(myRepeatingFunction, milli);
  setTimeout(clearFunction, (end-start)*milli);
  
  function clearFunction(){
    clearTimeout(myIntervalVar);
  }
  
  function myRepeatingFunction(){

    // put code or function call here
    singlePassInsertTimingFunction(0, 99-increment, 4, columns[0]);
    // put code or function call here

    increment++;
  }
}







// Merge Sort Functions



function mergeSort(speed){
    window.animateArray = [];
    window.animateArray[0] = []
    window.animateArray[1] = []
    window.animateArrayIndexer = 0;
    mergeSortRecurs(columns, 0);
    mergeTimingFunction(0, 671, speed);
}



function mergeSortRecurs(columnArray, index){
  if (columnArray.length > 1){
    const midPoint = Math.floor(columnArray.length/2);
    const abIndexLeft = index;
    const lArray = columnArray.slice(0,midPoint);
    const abIndexRight = midPoint+index;
    const rArray = columnArray.slice(midPoint, columnArray.length); 
    const left = mergeSortRecurs(lArray, abIndexLeft);
    const right = mergeSortRecurs(rArray, abIndexRight);
    return sortArray(left,right, index);
  }else{
    return columnArray;
  }
}

function sortArray(L,R, relIndex){

  const sortedArr = [];
  while(L.length > 0 || R.length > 0){
    if(R.length == 0){
      sortedArr.push(L[0]);
      buildAnimateArray(sortedArr, relIndex);
      L.shift();
    }else if(L.length == 0 || L[0].style.height > R[0].style.height){
      sortedArr.push(R[0]);
      buildAnimateArray(sortedArr, relIndex);
      R.shift();
    }else{
      sortedArr.push(L[0]);
      buildAnimateArray(sortedArr, relIndex);
      L.shift();
    }
  }
  return sortedArr;
}


function buildAnimateArray(updatedArray, indexRelative){
  animateArray[1][animateArrayIndexer] = []
  animateArray[0].push(indexRelative);
  for (i = 0; i < updatedArray.length; i++){
    animateArray[1][animateArrayIndexer].push(updatedArray[i].style.height);
  }
  animateArrayIndexer++;
}



function mergeSectionTimingFunction(start, end, milli, sectionIndex){

  var increment = start;

  var myIntervalVar = setInterval(myRepeatingFunction, milli);
  setTimeout(clearFunction, (end-start)*milli);
  
  function clearFunction(){
    clearTimeout(myIntervalVar);
  }
  
  function myRepeatingFunction(){

    // put code or function call here
    columns[animateArray[0][sectionIndex] + increment].style.height = animateArray[1][sectionIndex][increment];
    // put code or function call here

    increment++;
  }
}



function mergeTimingFunction(start, end, milli){

  var increment = start;

  var myIntervalVar = setInterval(myRepeatingFunction, milli);
  setTimeout(clearFunction, (end-start)*milli);
  
  function clearFunction(){
    clearTimeout(myIntervalVar);
  }
  
  function myRepeatingFunction(){

    // put code or function call here
    mergeSectionTimingFunction(0, animateArray[1][increment].length, 10, increment);
    // put code or function call here

    increment++;
  }
}