function activity2_p4() {
    let btn = (document.getElementById('act2-p3-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Testing the null hypothesis', 'act2-div-hp-testing');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="act2-div-hp-testing">
         <p>
            If <span id="act2-p4-mj-span1"> $$ \\vert t_0 \\vert > t_{\\alpha_h/2,n-1} $$</span> then we will reject the null hypothesis i.e. the population mean is not same as hypothesised mean i.e. &mu; &ne; &mu;<sub>0</sub>. Else fail to reject null hypothesis i.e. the population mean may near to hypothesised mean i.e. &mu; &asymp; &mu;<sub>0</sub>
         </p>

         <div class="row justify-content-center " style="align-items: center;">
            <div class="col-lg-4">
               $$ t_{\\alpha_h/2,n-1} = ${t_alpha_a2} $$
            </div>
            <div class="col-lg-4">
               $$ t_0 = \\frac{\\bar{X} - \\mu_0}{SE} = ${t0_a2} $$
            </div>
         </div>
         <br>
         <div class="fs-16px">
            What do you conclude from this?
         </div>
         <br>
         <div class="row justify-content-center " style="align-items:center;">
            <div class="col-lg-5" ><button id="act2-null-hypo-btn1" onclick="a2_vf_null_hypo('1')" style='border: 1px solid gray; width: 100%; text-align: center;'>&mu; &ne; &mu;<sub>0</sub></button></div>
            <div class="col-lg-5"><button id="act2-null-hypo-btn2" onclick="a2_vf_null_hypo('2')" style='border: 1px solid gray; width: 100%; text-align: center; margin-top:5px;'>&mu; &asymp; &mu;<sub>0</sub></button></div>
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p4-btn-1' onclick='activity3()' >Activity 3</button>
 
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    a2_find_null_hypothesis();
    hide_all_steps();
    setTimeout(() => {
        let math_jax_div = document.querySelector('#act2-div-hp-testing #act2-p4-mj-span1 .MathJax');
        math_jax_div.style.display = 'inline';
        show_step('act2-div-hp-testing');
    }, 150);
}
function a2_find_null_hypothesis() {
    if (Math.abs(t0_a2) < t_alpha_a2) {
        hypo_test_reject_op = 2;
    }
    else {
        hypo_test_reject_op = 1;
    }
}
function a2_vf_null_hypo(id) {
    let msg = '';
    let btn = (document.getElementById(`act2-null-hypo-btn${id}`));
    let next_btn = (document.getElementById('act2-p4-btn-1'));
    if (hypo_test_reject_op == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (hypo_test_reject_op == 2) {
        msg = 'We failed to reject null hypothesis';
    }
    if (parseInt(id) == hypo_test_reject_op) {
        alert(`You are correct!! ${msg}`);
        btn.style.backgroundColor = 'yellow';
        btn.removeEventListener('click', a2_vf_null_hypo);
        btn.removeAttribute('onclick');
        document
            .getElementById(`act2-null-hypo-btn${3 - id}`)
            .removeAttribute('onclick');
        next_btn.style.display = 'block';
    }
    else {
        alert(`You have chosen incorrect option, observe the results again.`);
    }
}
// activity1_p4();
//# sourceMappingURL=activity2_p4.js.map