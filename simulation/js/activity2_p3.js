function activity2_p3() {
    let btn = (document.getElementById('act2-p2-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('t-value', 'act2-p3-div');
    t_alpha_a2 = 0;
    t_alpha_a2 = t_table_data[N - 30][1];
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide center-text" id="act2-p3-div">
      <p class="fs-16px fb-500" style="text-align:left;">
         Choose correct t-value according to number of observation  and significance level
      </p>

      <div id="act2-p3-tb-box-1"></div>
      <br>
      <div id="act2-t-alpha-div" class='row justify-content-center fs-20px' style="align-items:center;">
         <div class="col-lg-3">
            $$ t_{\\alpha_h/2,n-1} =  $$
         </div>
         <div class='col-lg-3'>
            <input type='number' id='act2-t-alpha-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <div>
         <button class='btn btn-info std-btn' onclick='a2_verify_t_alpha();' style='position: relative; left: 0w;' id='act2-p3-btn-1'>Verify</button>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p3-btn-2' onclick='activity2_p4()' >Next</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    let tb_box = (document.getElementById('act2-p3-tb-box-1'));
    tb_box.style.textAlign = 'center';
    let header = ['n-1', '0.05', '0.01'];
    let tab = new Show_Table(header, t_table_data, tb_box);
    tab.load_table();
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-p3-div');
    }, 150);
}
function a2_verify_t_alpha() {
    let div = (document.getElementById('act2-t-alpha-div'));
    let btn = (document.getElementById('act2-p3-btn-1'));
    let next_btn = (document.getElementById('act2-p3-btn-2'));
    let a2_t_alpha_inp = (document.getElementById('act2-t-alpha-inp'));
    console.log(t_alpha_a2);
    if (!verify_values(parseFloat(a2_t_alpha_inp.value), t_alpha_a2)) {
        a2_t_alpha_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        a2_t_alpha_inp.style.border = '1px solid #ced4da';
        a2_t_alpha_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    div.innerHTML = '';
    div.innerHTML = `
   $$ t_{\\alpha_h/2,n-1} = ${t_alpha_a2} $$
   `;
    setTimeout(() => MathJax.typeset(), 100);
    btn.remove();
    next_btn.style.display = 'block';
}
// activity2_p3();
//# sourceMappingURL=activity2_p3.js.map