function activity1_p1() {
    let btn = (document.getElementById('act1-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Calculate t-score', 'act1-p1-div');
    SE = 0;
    t0 = 0;
    SE = parseFloat(Math.sqrt(S_2 / N).toFixed(3));
    t0 = parseFloat(((X_bar - mu_0) / SE).toFixed(3));
    maindiv.innerHTML += `
   ${btn_txt}
   <div class='collapse divide center-text' id="act1-p1-div">
      <div class="fs-18px row justify-content-center ">
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
      <p style="text-align:left;">Calculate,</p>
      <div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
         <div class="col-lg-3">
            $$ SE = \\sqrt{\\frac{S^2}{n}} = $$
         </div>
         <div class=col-lg-3>
            <input type='number' id='se-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <div>
         <button class='btn btn-info std-btn' onclick='verify_se();' style='position: relative; left: 0w;' id='vf-se-btn'>Verify</button>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p1-btn-1' onclick='load_t_score()' >Next</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-p1-div');
    }, 150);
}
function load_t_score() {
    let btn = (document.getElementById('act1-p1-btn-1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-p1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Calculate t-score(test statistics) by given formula
   </p>
   <div class="row justify-content-center fs-18px" id="t0-div" style="align-items:center;">
      <div class="col-lg-3">
         $$ t_0 = \\frac{\\bar{X} - \\mu_0}{SE} = $$
      </div>
      <div class="col-lg-3">
         <input type='number' id='t0-inp' class='form-control fs-16px' />
      </div>
   </div>
   <br>
      <div>
         <button class='btn btn-info std-btn' onclick='verify_t0();' style='position: relative; left: 0w;' id='vf-t0-btn'>Verify</button>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p1-btn-2' onclick='activity1_p2()' >Next</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_t0() {
    let div = document.getElementById('t0-div');
    let btn = (document.getElementById('vf-t0-btn'));
    let next_btn = (document.getElementById('act1-p1-btn-2'));
    let t0_inp = (document.getElementById('t0-inp'));
    console.log(t0);
    if (!verify_values(parseFloat(t0_inp.value), t0)) {
        t0_inp.style.border = '1px solid red';
        alert('Incorrect t_0 value');
        return;
    }
    else {
        t0_inp.style.border = '1px solid #ced4da';
        t0_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    div.innerHTML = '';
    div.innerHTML = `
   $$ t_0 = \\frac{\\bar{X} - \\mu_0}{SE} = ${t0} $$
   `;
    setTimeout(() => MathJax.typeset(), 100);
    btn.remove();
    next_btn.style.display = 'block';
}
function verify_se() {
    let div = document.getElementById('se-div');
    let btn = (document.getElementById('vf-se-btn'));
    let next_btn = (document.getElementById('act1-p1-btn-1'));
    let se_inp = (document.getElementById('se-inp'));
    console.log(SE);
    if (!verify_values(parseFloat(se_inp.value), SE)) {
        se_inp.style.border = '1px solid red';
        alert('Incorrect SE value');
        return;
    }
    else {
        se_inp.style.border = '1px solid #ced4da';
        se_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    div.innerHTML = '';
    div.innerHTML = `
   $$ SE = \\sqrt{\\frac{S^2}{n}} = ${SE} $$
   `;
    setTimeout(() => MathJax.typeset(), 100);
    btn.remove();
    next_btn.style.display = 'block';
}
// activity1_p1();
//# sourceMappingURL=activity1_p1.js.map