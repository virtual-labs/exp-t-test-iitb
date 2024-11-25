function activity4() {
    let btn = (document.getElementById('act3-btn-1'));
    btn && btn.remove();
    maindiv.innerHTML += `
   <div class='divide' id="act4-div">
      <h4 class="fb-700 fs-28px center-text">Activity 4</h4>
      <br>
      <div class="fs-18px fb-400">
         Consider the dataset X. We take samples of 54 observations with sample mean 42.25 and standard deviation of 3.569. There is hypothesis that the dataset has population mean of 43.25. Check whether it is true or not.(Take alpha value 0.05)

      </div>
   </div>
   `;
    act4_internal_calculation();
}
function act4_internal_calculation() {
    x_bar_a4 = 0;
    mu_0_a4 = 0;
    k_a4 = 0;
    sigma_a4 = 0;
    x_bar_a4 = parseFloat((Math.random() * 200 - 100).toFixed(3));
    k_a4 = parseFloat((Math.random() * 21 - 10.5).toFixed(3));
    mu_0_a4 = parseFloat((x_bar_a4 + 2 * k * Math.random() - k).toFixed(3));
    sigma_a4 = parseFloat((Math.random() * 20 - 10).toFixed(3));
}
function load_difference() {
    let div = (document.getElementById('act3-div'));
    let btn = (document.getElementById('act3-btn-1'));
    btn && btn.remove();
    div.innerHTML += `
   <br>
   <div style="text-align:left;" >
      <div class="fs-18px fb-500">
         If you see the comparison between the sample mean and Population mean you will see the less accuracy whie calculating sample mean.
      </div>
      <br>
      <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
               <thead class="center-text">
                  <tr class="fs-18px fb-400">
                     <th>Sample Mean</th>
                     <th>Population Mean</th>
                  </tr>
               </thead>
               <tbody>
                  <tr class="fs-16px">
                     <td>
                        The sample mean is the average of sample values picked from the population. The result resembles the populatioon mean to a certain extent.
                     </td>
                     <td>
                        Population mean is the central tendency for thr entire group.
                     </td>
                  </tr>
                  <tr class="fs-16px">
                     <td>
                        Compared to the population, the sample size is small. The sample size is represented by 'n'.
                     </td>
                     <td>
                        The population size is large, and the sample size is denoted by 'N'.
                     </td>
                  </tr>
                  <tr class="fs-16px">
                     <td>
                        The sample data is acquired from the population.
                     </td>
                     <td>
                        The population data is collected from records, censuses, etc.
                     </td>
                  </tr>
                  <tr class="fs-16px">
                     <td>
                        The formula used for the sample mean evaluation is: X&#772; = &sum;X<sub>i</sub> / n
                     </td>
                     <td>
                        The formula used for the population mean calculation is: &mu; = &sum; X / N
                     </td>
                  </tr>
                  <tr class="fs-16px">
                     <td>
                        For sample mean, data collection and computation are easy.
                     </td>
                     <td>
                        The collection of population data and computation is a very tedious process.
                     </td>
                  </tr>
                  <tr class="fs-16px">
                     <td>
                        The population size is too large or infinite.
                     </td>
                     <td>
                        The population size is small.
                     </td>
                  </tr>
                  <tr class="fs-16px">
                     <td>
                        The sample mean is denoted by x bar. i.e. 'x&#772;'.
                     </td>
                     <td>
                        The population mean is represented as mu, i.e. '&mu;'.
                     </td>
                  </tr>
                  <tr class="fs-16px">
                     <td>
                        The standard deviation derived from a sample mean is represented by 's'.
                     </td>
                     <td>
                        The standard deviation evaluated from the population mean is represented by '&sigma;'.
                     </td>
                  </tr>
                  <tr class="fs-16px">
                     <td>
                        Since the sample mean considers random sample values taken from the whole population, it may not provide accurate results.
                     </td>
                     <td>
                        The average calculated for the entire population is accurate and reliable.
                     </td>
                  </tr>
                  <tr class="fs-16px">
                     <td>
                        A sample is statistic.
                     </td>
                     <td>
                        The population is a parameter.
                     </td>
                  </tr>
                  <tr class="fs-16px">
                     <td>
                        Error occur when the sample doesn't represent the population or when samples are collected unevenly.
                     </td>
                     <td>
                        No errors-the entire population is considered for mean computation.
                     </td>
                  </tr>
               </tbody>
            </table>
        </div>
   </div>
   `;
}
// activity4();
//# sourceMappingURL=activity4.js.map