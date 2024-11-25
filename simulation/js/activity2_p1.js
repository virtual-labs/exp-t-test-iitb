function activity2_p1() {
    let btn = (document.getElementById('act2-btn-1'));
    btn && btn.remove();
    SE_a2 = 0;
    t0_a2 = 0;
    SE_a2 = parseFloat((sigma / Math.sqrt(N)).toFixed(3));
    t0_a2 = parseFloat(((X_dash_bar - mu_0) / SE_a2).toFixed(3));
    let btn_txt = get_collapse_btn_text('t-score', 'act2-p1-div');
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide center-text" id="act2-p1-div">
      <div class="row fs-18px justify-content-center ">
         <div class="col-lg-3">
            $$ \\bar{X'} = ${X_dash_bar} $$
         </div>
         <div class="col-lg-3">
            $$ \\mu_0 = ${mu_0} $$
         </div>
         <div class="col-lg-3">
            $$ \σ =  ${sigma} $$
         </div>
      </div>
      <br>
      <div id="act2-p1-se-div" class="fs-18px">
         <div class="row justify-content-center" style="align-items:center;" >
            <div class="col-lg-4">
               $$ SE = \\frac{\\sigma}{\\sqrt{n}} = $$
            </div>
            <div class="col-lg-4">
               <input type='number' id='act2-p1-se-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='verify_a2_se();' style='position: relative; left: 0w;' id='act2-p1-btn-1'>Verify</button>
      </div>
      <br>
      <div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p1-btn-2' onclick='a2_load_test_score()' >Next</button>
      </div>

   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-p1-div');
    }, 150);
}
function verify_a2_se() {
    let btn = (document.getElementById('act2-p1-btn-2'));
    let a2_se_inp = (document.getElementById('act2-p1-se-inp'));
    let div = (document.getElementById('act2-p1-se-div'));
    console.log(SE_a2);
    if (!verify_values(parseFloat(a2_se_inp.value), SE_a2)) {
        a2_se_inp.style.border = '1px solid red';
        alert('Incorrect SE value');
        return;
    }
    else {
        a2_se_inp.style.border = '1px solid #ced4da';
        a2_se_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    div.innerHTML = '';
    div.innerHTML = `
   $$ SE = \\frac{\\sigma}{\\sqrt{n}} = ${SE_a2}$$
   `;
    setTimeout(() => MathJax.typeset(), 100);
    btn.style.display = 'block';
}
function a2_load_test_score() {
    let btn = (document.getElementById('act2-p1-btn-2'));
    btn && btn.remove();
    let div = (document.getElementById('act2-p1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Calculate t-score(test statistics) by given formula
   </p>
   <div class="row justify-content-center fs-18px" id="act2-t0-div" style="align-items:center;">
      <div class="col-lg-3">
         $$ t_0 = \\frac{\\bar{X'} - \\mu_0}{SE} = $$
      </div>
      <div class="col-lg-3">
         <input type='number' id='act2-t0-inp' class='form-control fs-16px' />
      </div>
   </div>
   <br>
      <div>
         <button class='btn btn-info std-btn' onclick='verify_a2_t0();' style='position: relative; left: 0w;' id='act2-p1-btn-3'>Verify</button>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p1-btn-4' onclick='activity2_p2()' >Next</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_a2_t0() {
    let div = (document.getElementById('act2-t0-div'));
    let btn = (document.getElementById('act2-p1-btn-3'));
    let next_btn = (document.getElementById('act2-p1-btn-4'));
    let a2_t0_inp = (document.getElementById('act2-t0-inp'));
    console.log(t0_a2);
    if (!verify_values(parseFloat(a2_t0_inp.value), t0_a2)) {
        a2_t0_inp.style.border = '1px solid red';
        alert('Incorrect t_0 value');
        return;
    }
    else {
        a2_t0_inp.style.border = '1px solid #ced4da';
        a2_t0_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    div.innerHTML = '';
    div.innerHTML = `
   $$ t_0 = \\frac{\\bar{X'} - \\mu_0}{SE} = ${t0_a2} $$
   `;
    setTimeout(() => MathJax.typeset(), 100);
    btn.remove();
    next_btn.style.display = 'block';
}
// activity2_p1();
//# sourceMappingURL=activity2_p1.js.map