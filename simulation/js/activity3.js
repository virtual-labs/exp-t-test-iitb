function activity3() {
    let btn = (document.getElementById('act2-p4-btn-1'));
    btn && btn.remove();
    // maindiv.innerHTML += `
    // <div class="divide center-text" id="act3-div">
    //    <h4 class="fb-700 fs-28px">Activity 3</h4>
    //    <br>
    //    <div class="fs-18px fb-500" style="text-align:left;">
    //          What can you conclude through the experiment?
    //       </div>
    //       <br>
    //    <div>
    //       <div>
    //          <button id="act3-conclude-btn1" onclick="a2_vf_conslusion('1')" style='margin:5px 0; border: 1px solid gray; width: 60%; text-align: center;'>Hypothesised mean is always same as Population mean</button>
    //       </div>
    //       <div>
    //          <button id="act3-conclude-btn2" onclick="a2_vf_conslusion('2')" style='margin:5px 0; border: 1px solid gray; width: 60%; text-align: center;'>Hypothesised mean is not always same Population mean</button>
    //       </div>
    //       <div>
    //          <button id="act3-conclude-btn3" onclick="a2_vf_conslusion('3')" style='margin:5px 0; border: 1px solid gray; width: 60%; text-align: center;'>No conclusion</button>
    //       </div>
    //    </div>
    //    <br>
    //    <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act3-btn-1' onclick='activity4()' >Next</button>
    // </div>
    // `;
    // hide_all_steps();
}
function a2_vf_conslusion(id) {
    let btn = (document.getElementById(`act3-conclude-btn${id}`));
    let next_btn = (document.getElementById('act3-btn-1'));
    if (parseInt(id) == 2) {
        alert(`You are correct!!`);
        btn.style.backgroundColor = 'yellow';
        btn.removeAttribute('onclick');
        switch (parseInt(id)) {
            case 1:
                document
                    .getElementById(`act3-conclude-btn2`)
                    .removeAttribute('onclick');
                document
                    .getElementById(`act3-conclude-btn3`)
                    .removeAttribute('onclick');
                break;
            case 2:
                document
                    .getElementById(`act3-conclude-btn1`)
                    .removeAttribute('onclick');
                document
                    .getElementById(`act3-conclude-btn3`)
                    .removeAttribute('onclick');
                break;
            default:
                document
                    .getElementById(`act3-conclude-btn1`)
                    .removeAttribute('onclick');
                document
                    .getElementById(`act3-conclude-btn2`)
                    .removeAttribute('onclick');
                break;
        }
        next_btn.style.display = 'block';
    }
    else {
        alert(`You have chosen incorrect option, observe the results again.`);
    }
}
// activity3();
//# sourceMappingURL=activity3.js.map