// ================ Global variables ================ //
let alpha = 0.05;
let t_table_data = [];
for (let i = 28; i < 39; i++) {
    let arr = [
        t_table_one_tailed[i]['df'],
        t_table_one_tailed[i]['0.05'],
        t_table_one_tailed[i]['0.01'],
    ];
    t_table_data.push(arr);
}
//================= Activity 1 Variable =============//
let N = 30;
let k = 2;
let epsilon = [
    -0.221, 0.156, 0.141, -0.203, 0.568, 0.287, 0.279, 0.28, 0.298, -0.182,
    -0.471, 0.382, -0.417, -0.554, -0.076, 0.019, -0.349, 0.187, 0.428, -0.27,
    -0.211, -0.397, 0.011, -0.146, 0.109, -0.173, 0.455, -0.365, 0.326, -0.245,
];
let x0 = [
    3.029, 13.757, 22.602, 23.87, 24.776, 27.114, 27.332, 30.443, 31.352,
    32.345, 34.064, 42.804, 43.001, 43.518, 44.908, 64.831, 65.931, 68.346,
    71.815, 72.231, 72.727, 74.735, 75.137, 75.809, 79.858, 83.44, 92.287,
    92.963, 96.034, 97.518,
];
let X = [
    -18.522, -11.867, -10.507, 2.336, 4.074, 14.597, 28.97, 31.897, 36.02,
    36.352, 37.497, 45.901, 52.151, 54.54, 55.102, 57.369, 57.748, 60.412,
    61.571, 66.569, 66.684, 73.626, 76.21, 80.056, 80.166, 86.582, 90.487,
    113.553, 127.825, 136.658,
];
let sum_x = 1594.057;
let X_bar = 53.135;
let mu_0 = 53.141;
let sigma = 2.223;
let sum_x_x_bar_2 = 43450.292;
//S^2 or S square
let S_2 = 1498.286;
let act1_table_data_1 = [
    [-18.522, -71.657, 5134.726],
    [-11.867, -65.002, 4225.26],
    [-10.507, -63.642, 4050.304],
    [2.336, -50.799, 2580.538],
    [4.074, -49.061, 2406.982],
    [14.597, -38.538, 1485.177],
    [28.97, -24.165, 583.947],
    [31.897, -21.238, 451.053],
    [36.02, -17.115, 292.923],
    [36.352, -16.783, 281.669],
    [37.497, -15.638, 244.547],
    [45.901, -7.234, 52.331],
    [52.151, -0.984, 0.968],
    [54.54, 1.405, 1.974],
    [55.102, 1.967, 3.869],
    [57.369, 4.234, 17.927],
    [57.748, 4.613, 21.28],
    [60.412, 7.277, 52.955],
    [61.571, 8.436, 71.166],
    [66.569, 13.434, 180.472],
    [66.684, 13.549, 183.575],
    [73.626, 20.491, 419.881],
    [76.21, 23.075, 532.456],
    [80.056, 26.921, 724.74],
    [80.166, 27.031, 730.675],
    [86.582, 33.447, 1118.702],
    [90.487, 37.352, 1395.172],
    [113.553, 60.418, 3650.335],
    [127.825, 74.69, 5578.596],
    [136.658, 83.523, 6976.092],
];
let SE = 7.067;
let t0 = -0.001;
let t_alpha = 2.946;
let alpha_dd_options = [0.05, 0.01, 0.1];
let hypo_test_reject_op = 1;
//=============== Activity 2 variables ============//
let X_dash = [
    -5.314, -3.138, -2.693, 1.507, 2.075, 5.516, 10.216, 11.173, 12.522, 12.63,
    13.005, 15.753, 17.796, 18.578, 18.761, 19.503, 19.627, 20.498, 20.877,
    22.511, 22.549, 24.819, 25.664, 26.921, 26.957, 29.055, 30.332, 37.875,
    42.542, 45.43,
];
let X_dash_bar = 543.547;
let SE_a2 = 0.406;
let t0_a2 = 1207.897;
let t_alpha_a2 = 2.946;
//============= activity 4 variable =============//
let x_bar_a4;
let mu_0_a4;
let k_a4;
let sigma_a4;
//# sourceMappingURL=data.js.map