/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';


// common to 'scatter', 'scatter3d', 'scattergeo' and 'scattergl'
module.exports = function handleLineShapeDefaults(traceIn, traceOut, coerce) {
    var shape = coerce('line.shape');
    if(shape === 'spline') coerce('line.smoothing');
};
