function activity1_p3() {
    let btn = (document.getElementById('act1-p2-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('t-value', 'act1-p3-div');
    t_alpha = 0;
    t_alpha = t_table_data[N - 30][1];
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide center-text" id="act1-p3-div">
      <p class="fs-16px fb-500" style="text-align:left;">
         Choose correct t-value according to number of observation  and significance level
      </p>

      <div id="act1-p3-tb-box-1"></div>
      <br>
      <div id="t-alpha-div" class='row justify-content-center fs-20px' style="align-items:center;">
         <div class="col-lg-3">
            $$ t_{\\alpha_h/2,n-1} =  $$
         </div>
         <div class='col-lg-3'>
            <input type='number' id='t-alpha-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <div>
         <button class='btn btn-info std-btn' onclick='verify_t_alpha();' style='position: relative; left: 0w;' id='vf-t-alpha-btn'>Verify</button>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p3-btn-1' onclick='activity1_p4()' >Next</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    let tb_box = (document.getElementById('act1-p3-tb-box-1'));
    tb_box.style.textAlign = 'center';
    let header = ['n-1', '0.05', '0.01'];
    let tab = new Show_Table(header, t_table_data, tb_box);
    tab.load_table();
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-p3-div');
    }, 150);
}
function verify_t_alpha() {
    let div = (document.getElementById('t-alpha-div'));
    let btn = (document.getElementById('vf-t-alpha-btn'));
    let next_btn = (document.getElementById('act1-p3-btn-1'));
    let t_alpha_inp = (document.getElementById('t-alpha-inp'));
    console.log(t_alpha);
    if (!verify_values(parseFloat(t_alpha_inp.value), t_alpha)) {
        t_alpha_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        t_alpha_inp.style.border = '1px solid #ced4da';
        t_alpha_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    div.innerHTML = '';
    div.innerHTML = `
   $$ t_{\\alpha_h/2,n-1} = ${t_alpha} $$
   `;
    setTimeout(() => MathJax.typeset(), 100);
    btn.remove();
    next_btn.style.display = 'block';
}
// activity1_p3();
//# sourceMappingURL=activity1_p3.js.map