
function calcValorFuturoAnualidadVencida() {
    Swal.fire({
        title: 'Calculadora de Anualidades',
        html: `
                    <h4>Valor Futuro de una Anualidad Vencida</h4>
                    <math xmlns="http://www.w3.org/1998/Math/MathML" class="mb-3">
                        <mrow>
                            <mi>VF</mi>
                            <mo>=</mo>
                            <mi>A</mi>
                            <mo>×</mo>
                            <mfrac>
                                <mrow>
                                    <mo stretchy="false">(</mo>
                                    <msup>
                                        <mrow>
                                            <mn>1</mn>
                                            <mo>+</mo>
                                            <mi>i</mi>
                                            <mo stretchy="false">)</mo>
                                        </mrow>
                                        <mi>n</mi>
                                    </msup>
                                    <mo>-</mo>
                                    <mn>1</mn>
                                </mrow>
                                <mrow>
                                    <mi>i</mi>
                                </mrow>
                            </mfrac>
                        </mrow>
                    </math>

                    <ul>
                        <li>VF: Valor final</li>
                        <li>
                            <math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mrow>
                                    <mi>A</mi>
                                </mrow>
                            </math>: Monto de cada pago periódico
                        </li>
                        <li>
                            <math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mrow>
                                    <mi>i</mi>
                                </mrow>
                            </math>: Valor de la tasa de interés por período
                        </li>
                        <li>
                            <math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mrow>
                                    <mi>n</mi>
                                </mrow>
                            </math>: Número total de períodos
                        </li>
                    </ul>

                    <div class="mb-3">
                        <label for="a" class="form-label">Monto de cada pago periódico (A):</label>
                        <input type="number" class="form-control" id="a" step="any">
                    </div>

                    <div class="mb-3">
                        <label for="i" class="form-label">Tasa de interés por período (i) en decimal:</label>
                        <input type="number" class="form-control" id="i" step="any">
                    </div>

                    <div class="mb-3">
                        <label for="n" class="form-label">Número total de períodos (n):</label>
                        <input type="number" class="form-control" id="n" step="any">
                    </div>
                `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const a = parseFloat(document.getElementById('a').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(a) || isNaN(i) || isNaN(n)) {
                Swal.showValidationMessage('Por favor, ingrese todos los valores para realizar los cálculos.');
                return false;
            }

            const vf = a * (Math.pow(1 + i, n) - 1) / i;
            return vf.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor Futuro Calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}

function calcMontoPagoPeriodicoAnualidadVencida() {
    Swal.fire({
        title: 'Calculadora de Anualidades',
        html: `
            <h4>Formula del Monto de Cada Pago Periódico en una Anualidad Vencida usando valor final</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" class="mb-3">
                <mrow>
                    <mi>A</mi>
                    <mo>=</mo>
                    <mfrac>
                        <mrow>
                            <mi>VF</mi>
                        </mrow>
                        <mrow>
                            <mfrac>
                                <mrow>
                                    <mo stretchy="false">(</mo>
                                    <msup>
                                        <mrow>
                                            <mn>1</mn>
                                            <mo>+</mo>
                                            <mi>i</mi>
                                            <mo stretchy="false">)</mo>
                                        </mrow>
                                        <mi>n</mi>
                                    </msup>
                                    <mo>-</mo>
                                    <mn>1</mn>
                                </mrow>
                                <mrow>
                                    <mi>i</mi>
                                </mrow>
                            </mfrac>
                        </mrow>
                    </mfrac>
                </mrow>
            </math>

            <ul>
                <li>VF: Valor final</li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Monto de cada pago periódico
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Valor de la tasa de interés por período
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número total de períodos
                </li>
            </ul>

            <div class="mb-3">
                <label for="vf" class="form-label">Valor Final (VF):</label>
                <input type="number" class="form-control" id="vf" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por período (i) en decimal:</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de períodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const vf = parseFloat(document.getElementById('vf').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(vf) || isNaN(i) || isNaN(n) || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const a = vf * i / (Math.pow(1 + i, n) - 1);
            return a.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Monto de cada pago periódico calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcNumeroPeriodosAnualidadVencida() {
    Swal.fire({
        title: 'Calculadora de Anualidades',
        html: `
            <h4>Formula para Calcular el Número de Períodos en una Anualidad Vencida</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" class="mb-3">
                <mrow>
                    <mi>n</mi>
                    <mo>=</mo>
                    <mfrac>
                        <mrow>
                            <mi>Log</mi>
                            <mo stretchy="false">(</mo>
                            <mi>VF</mi>
                            <mo>×</mo>
                            <mi>i</mi>
                            <mo>+</mo>
                            <mi>A</mi>
                            <mo stretchy="false">)</mo>
                            <mo>-</mo>
                            <mi>Log</mi>
                            <mo stretchy="false">(</mo>
                            <mi>A</mi>
                            <mo stretchy="false">)</mo>
                        </mrow>
                        <mrow>
                            <mi>Log</mi>
                            <mo>⁡</mo>
                            <mo stretchy="false">(</mo>
                            <mn>1</mn>
                            <mo>+</mo>
                            <mi>i</mi>
                            <mo stretchy="false">)</mo>
                        </mrow>
                    </mfrac>
                </mrow>
            </math>

            <ul>
                <li>VF: Valor final</li>
                <li>A: Monto de cada pago periódico</li>
                <li>i: Valor de la tasa de interés por período</li>
                <li>n: Número total de períodos</li>
            </ul>

            <div class="mb-3">
                <label for="vf" class="form-label">Valor Final (VF):</label>
                <input type="number" class="form-control" id="vf" step="any">
            </div>

            <div class="mb-3">
                <label for="a" class="form-label">Monto de cada pago periódico (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por período (i) en decimal:</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const vf = parseFloat(document.getElementById('vf').value);
            const a = parseFloat(document.getElementById('a').value);
            const i = parseFloat(document.getElementById('i').value);

            if (isNaN(vf) || isNaN(a) || isNaN(i) || a <= 0 || i <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const n = (Math.log((vf * i + a)) - Math.log(a)) / Math.log(1 + i);
            return n.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Número total de períodos calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcValorPresenteAnualidadVencida() {
    Swal.fire({
        title: 'Calculadora de Anualidades',
        html: `
            <h4>Formula para Calcular el Valor Presente en una Anualidad Vencida</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" class="mb-3">
                <mrow>
                    <mi>VP</mi>
                    <mo>=</mo>
                    <mi>A</mi>
                    <mo>×</mo>
                    <mfrac>
                        <mrow>
                            <mo stretchy="false">(</mo>
                            <msup>
                                <mrow>
                                    <mn>1</mn>
                                    <mo>+</mo>
                                    <mi>i</mi>
                                    <mo stretchy="false">)</mo>
                                </mrow>
                                <mi>n</mi>
                            </msup>
                            <mo>-</mo>
                            <mn>1</mn>
                        </mrow>
                        <mrow>
                            <mi>i</mi>
                            <mo>×</mo>
                            <mo stretchy="false">(</mo>
                            <msup>
                                <mrow>
                                    <mn>1</mn>
                                    <mo>+</mo>
                                    <mi>i</mi>
                                    <mo stretchy="false">)</mo>
                                </mrow>
                                <mi>n</mi>
                            </msup>
                        </mrow>
                    </mfrac>
                </mrow>
            </math>

            <ul>
                <li>VP: Valor presente</li>
                <li>A: Monto de cada pago periódico</li>
                <li>i: Valor de la tasa de interés por período</li>
                <li>n: Número total de períodos</li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Monto de cada pago periódico (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por período (i) en decimal:</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de períodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const a = parseFloat(document.getElementById('a').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(a) || isNaN(i) || isNaN(n) || a <= 0 || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const vp = a * ((Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n)));
            return vp.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor Presente Calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}

function calcMontoPagoPeriodicoAnualidadVencidaVP() {
    Swal.fire({
        title: 'Calculadora de Anualidades',
        html: `
            <h4>Formula del Monto de Cada Pago Periódico en una Anualidad Vencida usando valor presente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" class="mb-3">
                <mrow>
                    <mi>A</mi>
                    <mo>=</mo>
                    <mi>VP</mi>
                    <mo>×</mo>
                    <mfrac>
                        <mrow>
                            <mi>i</mi>
                            <mo>×</mo>
                            <mo stretchy="false">(</mo>
                            <msup>
                                <mrow>
                                    <mn>1</mn>
                                    <mo>+</mo>
                                    <mi>i</mi>
                                    <mo stretchy="false">)</mo>
                                </mrow>
                                <mi>n</mi>
                            </msup>
                        </mrow>
                        <mrow>
                            <mo stretchy="false">(</mo>
                            <msup>
                                <mrow>
                                    <mn>1</mn>
                                    <mo>+</mo>
                                    <mi>i</mi>
                                    <mo stretchy="false">)</mo>
                                </mrow>
                                <mi>n</mi>
                            </msup>
                            <mo>-</mo>
                            <mn>1</mn>
                        </mrow>
                    </mfrac>
                </mrow>
            </math>

            <ul>
                <li>VP: Valor presente</li>
                <li>A: Monto de cada pago periódico</li>
                <li>i: Valor de la tasa de interés por período</li>
                <li>n: Número total de períodos</li>
            </ul>

            <div class="mb-3">
                <label for="vp" class="form-label">Valor Presente (VP):</label>
                <input type="number" class="form-control" id="vp" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por período (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de períodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const vp = parseFloat(document.getElementById('vp').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(vp) || isNaN(i) || isNaN(n) || vp <= 0 || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const a = vp * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
            return a.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Monto de cada pago periódico calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcNumeroPeriodosAnualidadVencidaVP() {
    Swal.fire({
        title: 'Calculadora de Anualidades',
        html: `
            <h4>Formula para Calcular el Número de Períodos en una Anualidad Vencida usando Valor Presente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" class="mb-3">
                <mrow>
                    <mi>n</mi>
                    <mo>=</mo>
                    <mfrac>
                        <mrow>
                            <mi>Log</mi>
                            <mo>⁡</mo>
                            <mo stretchy="false">(</mo>
                            <mi>A</mi>
                            <mo stretchy="false">)</mo>
                            <mo>-</mo>
                            <mi>Log</mi>
                            <mo stretchy="false">(⁡</mo>
                            <mi>A</mi>
                            <mo>-</mo>
                            <mo stretchy="false">(</mo>
                            <mi>i</mi>
                            <mo>×</mo>
                            <mi>VP</mi>
                            <mo stretchy="false">)</mo>
                            <mo stretchy="false">)</mo>
                        </mrow>
                        <mrow>
                            <mi>Log</mi>
                            <mo>⁡</mo>
                            <mo stretchy="false">(</mo>
                            <mn>1</mn>
                            <mo>+</mo>
                            <mi>i</mi>
                            <mo stretchy="false">)</mo>
                        </mrow>
                    </mfrac>
                </mrow>
            </math>

            <ul>
                <li>VP: Valor presente</li>
                <li>A: Monto de cada pago periódico</li>
                <li>i: Valor de la tasa de interés por período</li>
                <li>n: Número total de períodos</li>
            </ul>

            <div class="mb-3">
                <label for="vp" class="form-label">Valor Presente (VP):</label>
                <input type="number" class="form-control" id="vp" step="any">
            </div>

            <div class="mb-3">
                <label for="a" class="form-label">Monto de cada pago periódico (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por período (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const vp = parseFloat(document.getElementById('vp').value);
            const a = parseFloat(document.getElementById('a').value);
            const i = parseFloat(document.getElementById('i').value);

            if (isNaN(vp) || isNaN(a) || isNaN(i) || vp <= 0 || a <= 0 || i <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const n = (Math.log(a) - Math.log(a - (i * vp))) / Math.log(1 + i);
            return n.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Número total de períodos calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcValorFuturoAnualidadAnticipada() {
    Swal.fire({
        title: 'Calculadora de Anualidades',
        html: `
            <h4>Formula del Valor Futuro para Anualidades Anticipadas</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" class="mb-3">
                <mrow>
                    <mi>VF</mi>
                    <mo>=</mo>
                    <mi>A</mi>
                    <mo>×</mo>
                    <mo stretchy="false">(</mo>
                    <mn>1</mn>
                    <mo>+</mo>
                    <mi>i</mi>
                    <mo stretchy="false">)</mo>
                    <mo>×</mo>
                    <mfrac>
                        <mrow>
                            <mo stretchy="false">(</mo>
                            <msup>
                                <mrow>
                                    <mn>1</mn>
                                    <mo>+</mo>
                                    <mi>i</mi>
                                    <mo stretchy="false">)</mo>
                                </mrow>
                                <mi>n</mi>
                            </msup>
                            <mo>-</mo>
                            <mn>1</mn>
                        </mrow>
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </mfrac>
                </mrow>
            </math>

            <ul>
                <li>VF: Valor futuro</li>
                <li>A: Monto de cada pago periódico</li>
                <li>i: Valor de la tasa de interés por período</li>
                <li>n: Número total de períodos</li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Monto de cada pago periódico (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por período (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de períodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const a = parseFloat(document.getElementById('a').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(a) || isNaN(i) || isNaN(n) || a <= 0 || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const vf = a * (1 + i) * ((Math.pow(1 + i, n) - 1) / i);
            return vf.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor Futuro Calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcAnualidadAnticipadaVF() {
    Swal.fire({
        title: 'Calculadora de Anualidades',
        html: `
            <h4>Formula de la Anualidad para Anualidades Anticipadas usando Valor Futuro</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" class="mb-3">
                <mrow>
                    <mi>A</mi>
                    <mo>=</mo>
                    <mfrac>
                        <mrow>
                            <mi>VF</mi>
                        </mrow>
                        <mrow>
                            <mo stretchy="false">[</mo>
                            <mfrac>
                                <mrow>
                                    <mo stretchy="false">(</mo>
                                    <mn>1</mn>
                                    <mo>+</mo>
                                    <mi>i</mi>
                                    <mo stretchy="false">)</mo>
                                    <mo>×</mo>
                                    <mo stretchy="false">(</mo>
                                    <msup>
                                        <mrow>
                                            <mn>1</mn>
                                            <mo>+</mo>
                                            <mi>i</mi>
                                            <mo stretchy="false">)</mo>
                                        </mrow>
                                        <mi>n</mi>
                                    </msup>
                                    <mo>-</mo>
                                    <mn>1</mn>
                                </mrow>
                                <mrow>
                                    <mi>i</mi>
                                </mrow>
                            </mfrac>
                            <mo stretchy="false">]</mo>
                        </mrow>
                    </mfrac>
                </mrow>
            </math>

            <ul>
                <li>VF: Valor futuro</li>
                <li>A: Monto de cada pago periódico</li>
                <li>i: Valor de la tasa de interés por período</li>
                <li>n: Número total de períodos</li>
            </ul>

            <div class="mb-3">
                <label for="vf" class="form-label">Valor Futuro (VF):</label>
                <input type="number" class="form-control" id="vf" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por período (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de períodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const vf = parseFloat(document.getElementById('vf').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(vf) || isNaN(i) || isNaN(n) || vf <= 0 || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const a = vf / (((1 + i) * ((Math.pow(1 + i, n) - 1) / i)));
            return a.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Monto de cada pago periódico calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcValorPresenteAnualidadDiferida() {
    Swal.fire({
        title: 'Calculadora de Anualidades',
        html: `
            <h4>Formula del Valor Presente para Anualidad Diferida</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mi>VP</mi>
                <mo>=</mo>
                <mfrac>
                    <mrow>
                        <mi>A</mi>
                        <mo>&#xD7;</mo>
                        <mrow data-mjx-texclass="INNER">
                            <mo data-mjx-texclass="OPEN">(</mo>
                            <mn>1</mn>
                            <mo>&#x2212;</mo>
                            <mo stretchy="false">(</mo>
                            <mn>1</mn>
                            <mo>+</mo>
                            <mi>i</mi>
                            <msup>
                                <mo stretchy="false">)</mo>
                                <mrow data-mjx-texclass="ORD">
                                    <mo>&#x2212;</mo>
                                    <mi>n</mi>
                                </mrow>
                            </msup>
                            <mo data-mjx-texclass="CLOSE">)</mo>
                        </mrow>
                    </mrow>
                    <mrow>
                        <mi>i</mi>
                        <mo>&#xD7;</mo>
                        <mo stretchy="false">(</mo>
                        <mn>1</mn>
                        <mo>+</mo>
                        <mi>i</mi>
                        <msup>
                            <mo stretchy="false">)</mo>
                            <mi>m</mi>
                        </msup>
                    </mrow>
                </mfrac>
            </math>

            <ul>
                <li>VP: Valor presente</li>
                <li>A: Monto de cada pago periódico</li>
                <li>i: Valor de la tasa de interés por período</li>
                <li>m: Periodo de gracia</li>
                <li>n: Número total de períodos</li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Monto de cada pago periódico (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por período (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="m" class="form-label">Periodo de gracia (m):</label>
                <input type="number" class="form-control" id="m" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de períodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const a = parseFloat(document.getElementById('a').value);
            const i = parseFloat(document.getElementById('i').value);
            const m = parseFloat(document.getElementById('m').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(a) || isNaN(i) || isNaN(m) || isNaN(n) || a <= 0 || i <= 0 || m <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const vp = a * ((1 - Math.pow(1 + i, -n)) / i) / ((1 + i) ** m);
            return vp.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor Presente Calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}

function calcValorFuturoAnualidadDiferida() {
    Swal.fire({
        title: 'Calculadora de Anualidades',
        html: `
            <h4>Formula del Valor Futuro para Anualidad Diferida</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mi>V</mi>
                <mi>F</mi>
                <mo>=</mo>
                <mi>A</mi>
                <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">(</mo>
                    <mfrac>
                        <mrow data-mjx-texclass="ORD">
                            <mo stretchy="false">(</mo>
                            <mn>1</mn>
                            <mo>+</mo>
                            <mi>i</mi>
                            <msup>
                                <mo stretchy="false">)</mo>
                                <mi>n</mi>
                            </msup>
                            <mo>&#x2212;</mo>
                            <mn>1</mn>
                        </mrow>
                        <mrow data-mjx-texclass="ORD">
                            <mi>i</mi>
                        </mrow>
                    </mfrac>
                    <mo data-mjx-texclass="CLOSE">)</mo>
                </mrow>
            </math>

            <ul>
                <li>VF: Valor futuro</li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Monto de cada pago periódico
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Valor de la tasa de interés por período.
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número total de períodos.
                </li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Monto de cada pago periódico (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por período (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de períodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const a = parseFloat(document.getElementById('a').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(a) || isNaN(i) || isNaN(n) || a <= 0 || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const vf = a * (((1 + i) ** n - 1) / i);
            return vf.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor Futuro Calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcAnualidadAnualidadDiferida() {
    Swal.fire({
        title: 'Calculadora de Anualidades',
        html: `
            <h4>Formula Anualidad para Anualidad Diferida</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mi>A</mi>
                <mo>=</mo>
                <mfrac>
                    <mrow>
                        <mi>V</mi>
                        <mi>P</mi>
                        <mo>&#xD7;</mo>
                        <mo stretchy="false">(</mo>
                        <mn>1</mn>
                        <mo>+</mo>
                        <mi>i</mi>
                        <msup>
                            <mo stretchy="false">)</mo>
                            <mi>m</mi>
                        </msup>
                    </mrow>
                    <mfrac>
                        <mrow>
                            <mn>1</mn>
                            <mo>&#x2212;</mo>
                            <mo stretchy="false">(</mo>
                            <mn>1</mn>
                            <mo>+</mo>
                            <mi>i</mi>
                            <msup>
                                <mo stretchy="false">)</mo>
                                <mrow data-mjx-texclass="ORD">
                                    <mo>&#x2212;</mo>
                                    <mi>n</mi>
                                </mrow>
                            </msup>
                        </mrow>
                        <mi>i</mi>
                    </mfrac>
                </mfrac>
            </math>

            <ul>
                <li>VP: Valor presente</li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Monto de cada pago periódico
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Valor de la tasa de interés por período.
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>m</mi>
                        </mrow>
                    </math>: Periodo de gracia
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número total de períodos.
                </li>
            </ul>

            <div class="mb-3">
                <label for="vp" class="form-label">Valor presente (VP):</label>
                <input type="number" class="form-control" id="vp" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por período (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="m" class="form-label">Período de gracia (m):</label>
                <input type="number" class="form-control" id="m" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de períodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const vp = parseFloat(document.getElementById('vp').value);
            const i = parseFloat(document.getElementById('i').value);
            const m = parseFloat(document.getElementById('m').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(vp) || isNaN(i) || isNaN(m) || isNaN(n) || vp <= 0 || i <= 0 || m <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const A = vp * ((1 + i) ** m) / (((1 - (1 + i) ** -n) / i));
            return A.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Anualidad Calculada: ${result.value}`,
                icon: 'success'
            });
        }
    });
}

function calcVPAnualidadAnticipada() {
    Swal.fire({
        title: 'Calculadora de Valor Presente (VP) para Anualidad Anticipada',
        html: `
            <h4>Fórmula VP para anualidad anticipada</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mi>V</mi>
                <mi>P</mi>
                <mo>=</mo>
                <mi>A</mi>
                <mo>&#xD7;</mo>
                <mo stretchy="false">(</mo>
                <mn>1</mn>
                <mo>+</mo>
                <mi>i</mi>
                <mo stretchy="false">)</mo>
                <mo>&#xD7;</mo>
                <mfrac>
                    <mrow>
                        <mo stretchy="false">(</mo>
                        <mn>1</mn>
                        <mo>+</mo>
                        <mi>i</mi>
                        <msup>
                            <mo stretchy="false">)</mo>
                            <mi>n</mi>
                        </msup>
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                    </mrow>
                    <mrow>
                        <mi>i</mi>
                        <mo>&#xD7;</mo>
                        <mo stretchy="false">(</mo>
                        <mn>1</mn>
                        <mo>+</mo>
                        <mi>i</mi>
                        <msup>
                            <mo stretchy="false">)</mo>
                            <mi>n</mi>
                        </msup>
                    </mrow>
                </mfrac>
            </math>

            <ul>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>VP</mi>
                        </mrow>
                    </math>: Valor presente
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Monto de cada pago periódico
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Valor de la tasa de interés por período
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número total de períodos
                </li>
            </ul>

            <div class="mb-3">
                <label for="A" class="form-label">Monto de cada pago periódico (A):</label>
                <input type="number" class="form-control" id="A" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por período (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de períodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const A = parseFloat(document.getElementById('A').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(A) || isNaN(i) || isNaN(n)) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const VP = A * (1 + i) * ((1 + i) ** n - 1) / (i * (1 + i) ** n);
            return VP.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor Presente (VP) calculado para la anualidad anticipada: ${result.value}`,
                icon: 'success'
            });
        }
    });
}

function calcMontoAnualidadAnticipada() {
    Swal.fire({
        title: 'Calculadora de Monto de Anualidad Anticipada - Usando Valor Presente',
        html: `
            <h4>Fórmula A para anualidad anticipada usando VP</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                        <mi>A</mi>
                        <mo>=</mo>
                        <mfrac>
                            <mrow>
                                <mi>V</mi>
                                <mi>P</mi>
                            </mrow>
                            <mrow>
                                <mo stretchy="false">(</mo>
                                <mn>1</mn>
                                <mo>+</mo>
                                <mi>i</mi>
                                <mo stretchy="false">)</mo>
                                <mo>&#xD7;</mo>
                                <mfrac>
                                    <mrow data-mjx-texclass="INNER">
                                        <mo data-mjx-texclass="OPEN">(</mo>
                                        <mo stretchy="false">(</mo>
                                        <mn>1</mn>
                                        <mo>+</mo>
                                        <mi>i</mi>
                                        <msup>
                                            <mo stretchy="false">)</mo>
                                            <mi>n</mi>
                                        </msup>
                                        <mo>&#x2212;</mo>
                                        <mn>1</mn>
                                        <mo data-mjx-texclass="CLOSE">)</mo>
                                    </mrow>
                                    <mrow>
                                        <mi>i</mi>
                                        <mo>&#xD7;</mo>
                                        <mrow data-mjx-texclass="INNER">
                                            <mo data-mjx-texclass="OPEN">(</mo>
                                            <mo stretchy="false">(</mo>
                                            <mn>1</mn>
                                            <mo>+</mo>
                                            <mi>i</mi>
                                            <msup>
                                                <mo stretchy="false">)</mo>
                                                <mrow data-mjx-texclass="ORD">
                                                    <mi>n</mi>

                                                </mrow>
                                            </msup>
                                            
                                            <mo data-mjx-texclass="CLOSE">)</mo>
                                        </mrow>
                                    </mrow>
                                </mfrac>
                            </mrow>
                        </mfrac>
                    </math>

            <ul>
                <li>VP: Valor presente</li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Monto de cada pago periódico
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Valor de la tasa de interés por período
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número total de períodos
                </li>
            </ul>

            <div class="mb-3">
                <label for="VP" class="form-label">Valor presente (VP):</label>
                <input type="number" class="form-control" id="VP" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por período (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de períodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const VP = parseFloat(document.getElementById('VP').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(VP) || isNaN(i) || isNaN(n) || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const A = VP / ((1 + i) * ((Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n))));

            return A.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Monto de cada pago periódico (A) calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}




