const Machine1Ui = document.getElementById('MACHINE1');
const Machine2Ui = document.getElementById('MACHINE2');


//processing returned object value. Keys name are random, so picking last key and return the value.
processVal = (obj) => Number(obj);


//M1, M2 should be matched with RTDB of Firebase
const manipulateUi = ({M1, M2}) => {
    const Machine_1 = processVal(M1);
    const Machine_2 = processVal(M2);

    Machine1Ui.textContent = Machine_1 + ' rpm';   
    Machine2Ui.textContent = Machine_2 + ' rpm';     
}


// Data read from firebase RTDB
const ref = firebase.database().ref();
ref.on('value', snapshot => {
    const val = snapshot.val();
    manipulateUi(val);
});



