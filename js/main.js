const Machine1Ui = document.getElementById('MACHINE1');
const Machine2Ui = document.getElementById('MACHINE2');
const Machine3Ui = document.getElementById('MACHINE3');
const Machine4Ui = document.getElementById('MACHINE4');
const Machine5Ui = document.getElementById('MACHINE5');
const Machine6Ui = document.getElementById('MACHINE6');
const Machine7Ui = document.getElementById('MACHINE7');
const Machine8Ui = document.getElementById('MACHINE8');
const Machine9Ui = document.getElementById('MACHINE9');
const Machine10Ui = document.getElementById('MACHINE10');
const Machine11Ui = document.getElementById('MACHINE11');
const Machine12Ui = document.getElementById('MACHINE12');
const Machine13Ui = document.getElementById('MACHINE13');
const Machine14Ui = document.getElementById('MACHINE14');
const Machine15Ui = document.getElementById('MACHINE15');
const Machine16Ui = document.getElementById('MACHINE16');
const Machine17Ui = document.getElementById('MACHINE17');
const Machine18Ui = document.getElementById('MACHINE18');
const Machine19Ui = document.getElementById('MACHINE19');
const Machine20Ui = document.getElementById('MACHINE20');



//processing returned object value. Keys name are random, so picking last key and return the value.
processVal = (obj) => Number(obj);


//M1, M2 should be matched with RTDB of Firebase
const manipulateUi = ({M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M11, M12, M13, M14, M15, M16, M17, M18, M19, M20}) => {
    const Machine_1 = processVal(M1);
    const Machine_2 = processVal(M2);
    const Machine_3 = processVal(M3);
    const Machine_4 = processVal(M4);
    const Machine_5 = processVal(M5);
    const Machine_6 = processVal(M6);
    const Machine_7 = processVal(M7);
    const Machine_8 = processVal(M8);
    const Machine_9 = processVal(M9);
    const Machine_10 = processVal(M10);
    const Machine_11 = processVal(M11);
    const Machine_12 = processVal(M12);
    const Machine_13 = processVal(M13);
    const Machine_14 = processVal(M14);
    const Machine_15 = processVal(M15);
    const Machine_16 = processVal(M16);
    const Machine_17 = processVal(M17);
    const Machine_18 = processVal(M18);
    const Machine_19 = processVal(M19);
    const Machine_20 = processVal(M20);


    Machine1Ui.textContent = Machine_1 + ' rpm';   
    Machine2Ui.textContent = Machine_2 + ' rpm';   
    Machine3Ui.textContent = Machine_3 + ' rpm';   
    Machine4Ui.textContent = Machine_4 + ' rpm';
    Machine5Ui.textContent = Machine_5 + ' rpm';   
    Machine6Ui.textContent = Machine_6 + ' rpm';   
    Machine7Ui.textContent = Machine_7 + ' rpm';   
    Machine8Ui.textContent = Machine_8 + ' rpm';
    Machine9Ui.textContent = Machine_9 + ' rpm';   
    Machine10Ui.textContent = Machine_10 + ' rpm'; 
    Machine11Ui.textContent = Machine_11 + ' rpm';   
    Machine12Ui.textContent = Machine_12 + ' rpm';   
    Machine13Ui.textContent = Machine_13 + ' rpm';   
    Machine14Ui.textContent = Machine_14 + ' rpm';
    Machine15Ui.textContent = Machine_15 + ' rpm';   
    Machine16Ui.textContent = Machine_16 + ' rpm';   
    Machine17Ui.textContent = Machine_17 + ' rpm';   
    Machine18Ui.textContent = Machine_18 + ' rpm';
    Machine19Ui.textContent = Machine_19 + ' rpm';   
    Machine20Ui.textContent = Machine_20 + ' rpm';  
 
}


// Data read from firebase RTDB
const ref = firebase.database().ref();
ref.on('value', snapshot => {
    const val = snapshot.val();
    manipulateUi(val);
});



