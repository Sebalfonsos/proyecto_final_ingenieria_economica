function calcValorPresenteGradienteLinealCreciente() {
    Swal.fire({
        title: 'Calculadora de Valor Presente en Gradiente Lineal Creciente',
        html: `
            <h4>Fórmula Valor Presente en una Gradiente Lineal Creciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mi>VP</mi>
                <mo>=</mo>
                <mi>A</mi>
                <mo>&#xD7;</mo>
                <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">[</mo>
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
                    <mo data-mjx-texclass="CLOSE">]</mo>
                </mrow>
                <mo>+</mo>
                <mfrac>
                    <mi>G</mi>
                    <mi>i</mi>
                </mfrac>
                <mo>&#xD7;</mo>
                <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">[</mo>
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
                    
                </mrow>
                <mo>&#x2212;</mo>
                <mfrac>
                    <mi>n</mi>
                    <mrow>
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
                <mo data-mjx-texclass="CLOSE">]</mo>
            </math>

            <ul>
                <li>VP: Valor presente</li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>G</mi>
                        </mrow>
                    </math>: Valor Gradiente
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Monto de la primera cuota
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Valor de la tasa de interés por periodo.
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número total de periodos.
                </li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Monto de la primera cuota (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="g" class="form-label">Valor Gradiente (G):</label>
                <input type="number" class="form-control" id="g" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por periodo (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de periodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const A = parseFloat(document.getElementById('a').value);
            const G = parseFloat(document.getElementById('g').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(A) || isNaN(G) || isNaN(i) || isNaN(n) || A <= 0 || G <= 0 || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }


            const VP = A * ((Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n))) + (G / i) * (((Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n))) - (n / Math.pow(1 + i, n)));


            return VP.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Valor Presente Calculado:',
                `VP = ${result.value}`,
                'success'
            );
        }
    });
}


function calcValorFuturoGradienteLineal() {
    Swal.fire({
        title: 'Calculadora de Valor Futuro en una Gradiente Lineal Creciente',
        html: `
            <h4>1.2 Fórmula del Valor Futuro en una Gradiente Lineal Creciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mi>V</mi>
                <mi>F</mi>
                <mo>=</mo>
                <mi>A</mi>
                <mo>&#xD7;</mo>
                <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">[</mo>
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
                        <mi>i</mi>
                    </mfrac>
                    <mo data-mjx-texclass="CLOSE">]</mo>
                </mrow>
                <mo>+</mo>
                <mfrac>
                    <mi>G</mi>
                    <mi>i</mi>
                </mfrac>
                <mo>&#xD7;</mo>
                <mo>[</mo>
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
                    <mi>i</mi>
                </mfrac>
                <mo>&#x2212;</mo>
                <mi>n</mi>
                <mo>]</mo>
            </math>

            <ul>
                <li>VF: Valor futuro</li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>G</mi>
                        </mrow>
                    </math>: Valor Gradiente
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Monto de la primera cuota
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
                <label for="a" class="form-label">Monto de la primera cuota (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="g" class="form-label">Valor gradiente (G):</label>
                <input type="number" class="form-control" id="g" step="any">
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
            const g = parseFloat(document.getElementById('g').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(a) || isNaN(g) || isNaN(i) || isNaN(n) || a <= 0 || g <= 0 || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const VF = a * (((1 + i) ** n - 1) / i) + (g / i) * ((((1 + i) ** n - 1) / i) - n);
            return VF.toFixed(2);
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

function calcPrimeraCuotaGradienteLineal() {
    Swal.fire({
        title: 'Calculadora de Monto de la Primera Cuota en una Gradiente Lineal Creciente',
        html: `
            <h4>1.3 Fórmula para Calcular el Monto de la Primera Cuota en una Gradiente Lineal Creciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mi>A</mi>
                <mo>=</mo>
                <mfrac>
                    <mrow>
                        <mi>V</mi>
                        <mi>F</mi>
                        <mo>&#x2212;</mo>
                        <mfrac>
                            <mi>G</mi>
                            <mi>i</mi>
                        </mfrac>
                        <mo>&#xD7;</mo>
                        <mrow data-mjx-texclass="INNER">
                            <mo data-mjx-texclass="OPEN">[</mo>
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
                                <mi>i</mi>
                            </mfrac>
                            <mo>&#x2212;</mo>
                            <mi>n</mi>
                            <mo data-mjx-texclass="CLOSE">]</mo>
                        </mrow>
                    </mrow>
                    <mrow>
                        <mo>[</mo>
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
                            <mi>i</mi>
                        </mfrac>
                        <mo>]</mo>
                    </mrow>
                </mfrac>
            </math>

            <ul>
                <li>VF: Valor futuro</li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>G</mi>
                        </mrow>
                    </math>: Valor Gradiente
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Monto de la primera cuota
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
                <label for="vf" class="form-label">Valor futuro (VF):</label>
                <input type="number" class="form-control" id="vf" step="any">
            </div>

            <div class="mb-3">
                <label for="g" class="form-label">Valor gradiente (G):</label>
                <input type="number" class="form-control" id="g" step="any">
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
            const g = parseFloat(document.getElementById('g').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(vf) || isNaN(g) || isNaN(i) || isNaN(n) || vf <= 0 || g <= 0 || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const A = (vf - (g / i) * (((1 + i) ** n - 1) / i - n)) / (((1 + i) ** n - 1) / i);
            return A.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Monto de la Primera Cuota Calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}

function calcCuotaGradienteLineal() {
    Swal.fire({
        title: 'Calculadora de Valor de la Cuota en un Período en una Gradiente Lineal Creciente',
        html: `
            <h4>1.4 Fórmula para Calcular el Valor de la Cuota en el Período \( n \) en una Gradiente Lineal Creciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                    <mi>C</mi>
                    <mi>n</mi>
                </msub>
                <mrow>
                    <mo>=</mo>
                    <mi>A</mi>
                    <mo>+</mo>
                    <mo stretchy="false">(</mo>
                    <mi>n</mi>
                    <mo>-</mo>
                    <mn>1</mn>
                    <mo stretchy="false">)</mo>
                    <mo>*</mo>
                    <mi>G</mi>
                </mrow>
            </math>

            <ul>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>C</mi>
                        </mrow>
                    </math>: Valor cuota en el período 
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>G</mi>
                        </mrow>
                    </math>: Valor gradiente
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Valor de la primera cuota
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número del período a calcular
                </li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Valor de la primera cuota (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="g" class="form-label">Valor gradiente (G):</label>
                <input type="number" class="form-control" id="g" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número del período (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const a = parseFloat(document.getElementById('a').value);
            const g = parseFloat(document.getElementById('g').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(a) || isNaN(g) || isNaN(n) || a <= 0 || g <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const cn = a + (n - 1) * g;
            return cn.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor de la Cuota en el Período ${n} Calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcValorPresenteGradienteDecreciente() {
    Swal.fire({
        title: 'Calculadora de Valor Presente en una Gradiente Lineal Decreciente',
        html: `
            <h4>2.1 Fórmula para Calcular el Valor Presente en una Gradiente Lineal Decreciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mi>V</mi>
                <mi>P</mi>
                <mo>=</mo>
                <mi>A</mi>
                <mo>&#xD7;</mo>
                <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">[</mo>
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
                    <mo data-mjx-texclass="CLOSE">]</mo>
                </mrow>
                <mo>-</mo>
                <mfrac>
                    <mi>G</mi>
                    <mi>i</mi>
                </mfrac>
                <mo>&#xD7;</mo>
                <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">[</mo>
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
                    
                </mrow>
                <mo>&#x2212;</mo>
                <mfrac>
                    <mi>n</mi>
                    <mrow>
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
                <mo data-mjx-texclass="CLOSE">]</mo>
            </math>

            <ul>
                <li>VP: Valor presente</li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>G</mi>
                        </mrow>
                    </math>: Valor Gradiente
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Monto de la primera cuota
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Valor de la tasa de interés por periodo.
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Numero total de periodos.
                </li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Monto de la primera cuota (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="g" class="form-label">Valor Gradiente (G):</label>
                <input type="number" class="form-control" id="g" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por periodo (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de periodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const A = parseFloat(document.getElementById('a').value);
            const G = parseFloat(document.getElementById('g').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(A) || isNaN(G) || isNaN(i) || isNaN(n) || A <= 0 || G <= 0 || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const VP = A * ((Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n))) - (G / i) * (((Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n))) - (n / Math.pow(1 + i, n)));
            return VP.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor presente calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}

function calcValorFuturoGradienteDecreciente() {
    Swal.fire({
        title: 'Calculadora de Gradiente Lineal Decreciente',
        html: `
            <h4>Formula Valor Futuro en una Gradiente Lineal Decreciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mi>V</mi>
                <mi>F</mi>
                <mo>=</mo>
                <mi>A</mi>
                <mo>&#xD7;</mo>
                <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">[</mo>
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
                        <mi>i</mi>
                    </mfrac>
                    <mo data-mjx-texclass="CLOSE">]</mo>
                </mrow>
                <mo>-</mo>
                <mfrac>
                    <mi>G</mi>
                    <mi>i</mi>
                </mfrac>
                <mo>&#xD7;</mo>
                <mo>[</mo>
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
                    <mi>i</mi>
                </mfrac>
                <mo>&#x2212;</mo>
                <mi>n</mi>
                <mo>]</mo>
            </math>

            <ul>
                <li>VF: Valor futuro</li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>G</mi>
                        </mrow>
                    </math>: Valor Gradiente
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Monto de la primera cuota
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Valor de la tasa de interés por periodo.
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número total de periodos.
                </li>
            </ul>

            <div class="mb-3">
                <label for="vf" class="form-label">Valor Futuro (VF):</label>
                <input type="number" class="form-control" id="vf" step="any">
            </div>

            <div class="mb-3">
                <label for="a" class="form-label">Monto de la primera cuota (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="g" class="form-label">Valor Gradiente (G):</label>
                <input type="number" class="form-control" id="g" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por periodo (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de periodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const vf = parseFloat(document.getElementById('vf').value);
            const a = parseFloat(document.getElementById('a').value);
            const g = parseFloat(document.getElementById('g').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(vf) || isNaN(a) || isNaN(g) || isNaN(i) || isNaN(n) || vf <= 0 || a <= 0 || g <= 0 || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const VF = vf * (((1 + i) ** n) / i - n - g / i * ((1 + i) ** n - 1) / i);
            return VF.toFixed(2);
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

function calcMontoPrimeraCuotaGradienteDecreciente() {
    Swal.fire({
        title: 'Calculadora de Gradiente Lineal Decreciente - Monto de Primera Cuota',
        html: `
            <h4>Formula para calcular el monto de la primera cuota en una Gradiente Lineal Decreciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mi>A</mi>
                <mo>=</mo>
                <mfrac>
                    <mrow>
                        <mi>V</mi>
                        <mi>F</mi>
                        <mo>+</mo>
                        <mfrac>
                            <mi>G</mi>
                            <mi>i</mi>
                        </mfrac>
                        <mo>&#xD7;</mo>
                        <mrow data-mjx-texclass="INNER">
                            <mo data-mjx-texclass="OPEN">[</mo>
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
                                <mi>i</mi>
                            </mfrac>
                            <mo>&#x2212;</mo>
                            <mi>n</mi>
                            <mo data-mjx-texclass="CLOSE">]</mo>
                        </mrow>
                    </mrow>
                    <mrow>
                        <mo>[</mo>
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
                            <mi>i</mi>
                        </mfrac>
                        <mo>]</mo>
                    </mrow>
                </mfrac>
            </math>

            <ul>
                <li>VF: Valor futuro</li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>G</mi>
                        </mrow>
                    </math>: Valor Gradiente
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Monto de la primera cuota
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Valor de la tasa de interés por periodo.
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número total de periodos.
                </li>
            </ul>

            <div class="mb-3">
                <label for="vf" class="form-label">Valor Futuro (VF):</label>
                <input type="number" class="form-control" id="vf" step="any">
            </div>

            <div class="mb-3">
                <label for="g" class="form-label">Valor Gradiente (G):</label>
                <input type="number" class="form-control" id="g" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés por periodo (i):</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número total de periodos (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const vf = parseFloat(document.getElementById('vf').value);
            const g = parseFloat(document.getElementById('g').value);
            const i = parseFloat(document.getElementById('i').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(vf) || isNaN(g) || isNaN(i) || isNaN(n) || vf <= 0 || g <= 0 || i <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const A = (vf + g / i * (((1 + i) ** n - 1) / i - n)) / (((1 + i) ** n - 1) / i);
            return A.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Monto de la Primera Cuota Calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}



function calcValorCuotaGradienteDecreciente() {
    Swal.fire({
        title: 'Calculadora de Gradiente Lineal Decreciente - Valor de Cuota en un Período',
        html: `
            <h4>Formula para calcular el valor de la cuota en un período en una Gradiente Lineal Decreciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <msub>
                    <mi>C</mi>
                    <mi>n</mi>
                </msub>
                <mrow>
                    <mo>=</mo>
                    <mi>A</mi>
                    <mo>-</mo>
                    <mo stretchy="false">(</mo>
                    <mi>n</mi>
                    <mo>-</mo>
                    <mn>1</mn>
                    <mo stretchy="false">)</mo>
                    <mo>&#x2217;</mo>
                    <mi>G</mi>
                </mrow>
            </math>

            <ul>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>C</mi>
                        </mrow>
                    </math>: Valor de la cuota en el período
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>G</mi>
                        </mrow>
                    </math>: Valor gradiente
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Valor de la primera cuota
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número del período a calcular
                </li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Valor de la primera cuota (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="g" class="form-label">Valor Gradiente (G):</label>
                <input type="number" class="form-control" id="g" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número del período (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const A = parseFloat(document.getElementById('a').value);
            const G = parseFloat(document.getElementById('g').value);
            const n = parseFloat(document.getElementById('n').value);

            if (isNaN(A) || isNaN(G) || isNaN(n) || A <= 0 || G <= 0 || n <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const Cn = A - (n - 1) * G;
            return Cn.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor de la cuota en el período calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcValorPresenteGradienteGeometricoCreciente() {
    Swal.fire({
        title: 'Calculadora de Gradiente Geométrico Creciente - Valor Presente',
        html: `
            <h4>Fórmula para calcular el valor presente en un gradiente geométrico creciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mrow>
                    <mi>VP</mi>
                    <mo>=</mo>
                    <mi>A</mi>
                    <mo>&#xD7;</mo>
                    <mo stretchy="false">[</mo>
                    <mfrac>
                        <mrow>
                            <mo stretchy="false">(</mo>
                            <msup>
                                <mrow>
                                    <mn>1</mn>
                                    <mo>+</mo>
                                    <mi>J</mi>
                                    <mo stretchy="false">)</mo>
                                </mrow>
                                <mi>n</mi>
                            </msup>
                            <mo>-</mo>
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
                            <mi>J</mi>
                            <mo>-</mo>
                            <mi>i</mi>
                            <mo stretchy="false">)</mo>
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
                    <mo stretchy="false">]</mo>
                </mrow>
            </math>

            <ul>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>VP</mi>
                        </mrow>
                    </math>: Valor presente en el período
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Valor de la primera cuota
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número del período a calcular
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>J</mi>
                        </mrow>
                    </math>: Gradiente (%)
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Tasa de interés
                </li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Valor de la primera cuota (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número del período (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>

            <div class="mb-3">
                <label for="j" class="form-label">Gradiente (%):</label>
                <input type="number" class="form-control" id="j" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés:</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const A = parseFloat(document.getElementById('a').value);
            const n = parseFloat(document.getElementById('n').value);
            const J = parseFloat(document.getElementById('j').value);
            const i = parseFloat(document.getElementById('i').value);

            if (isNaN(A) || isNaN(n) || isNaN(J) || isNaN(i) || A <= 0 || n <= 0 || J <= 0 || i <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const VP = A * (((1 + J / 100) ** n - (1 + i / 100) ** n) / ((J - i) / 100 * ((1 + i / 100) ** n)));
            return VP.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor presente calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}

function calcValorFuturoGradienteGeometricoCreciente() {
    Swal.fire({
        title: 'Calculadora de Gradiente Geométrico Creciente - Valor Futuro',
        html: `
            <h4>Fórmula para calcular el valor futuro en un gradiente geométrico creciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mrow>
                    <mi>VF</mi>
                    <mo>=</mo>
                    <mi>A</mi>
                    <mo>&#xD7;</mo>
                    <mo stretchy="false">[</mo>
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
                            <mo stretchy="false">(</mo>
                            <msup>
                                <mrow>
                                    <mn>1</mn>
                                    <mo>+</mo>
                                    <mi>J</mi>
                                    <mo stretchy="false">)</mo>
                                </mrow>
                                <mi>n</mi>
                            </msup>
                        </mrow>
                        <mrow>
                            <mo stretchy="false">(</mo>
                            <mi>i</mi>
                            <mo>-</mo>
                            <mi>J</mi>
                            <mo stretchy="false">)</mo>
                        </mrow>
                    </mfrac>
                    <mo stretchy="false">]</mo>
                </mrow>
            </math>

            <ul>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>VF</mi>
                        </mrow>
                    </math>: Valor futuro en el período
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Valor de la primera cuota
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número del período a calcular
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>J</mi>
                        </mrow>
                    </math>: Gradiente (%)
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Tasa de interés
                </li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Valor de la primera cuota (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número del período (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>

            <div class="mb-3">
                <label for="j" class="form-label">Gradiente (%):</label>
                <input type="number" class="form-control" id="j" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés:</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const A = parseFloat(document.getElementById('a').value);
            const n = parseFloat(document.getElementById('n').value);
            const J = parseFloat(document.getElementById('j').value);
            const i = parseFloat(document.getElementById('i').value);

            if (isNaN(A) || isNaN(n) || isNaN(J) || isNaN(i) || A <= 0 || n <= 0 || J <= 0 || i <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const VF = A * (((1 + i / 100) ** n - (1 + J / 100) ** n) / ((i - J) / 100));
            return VF.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor futuro calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}

function calcValorPrimeraCuotaGradienteGeometricoCreciente() {
    Swal.fire({
        title: 'Calculadora de Gradiente Geométrico Creciente - Valor de la Primera Cuota',
        html: `
            <h4>Fórmula para calcular el valor de la primera cuota en un gradiente geométrico creciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mrow>
                    <mi>A</mi>
                    <mo>=</mo>
                    <mi>VF</mi>
                    <mo>&#xD7;</mo>
                    <mo stretchy="false">[</mo>
                    <mfrac>
                        <mrow>
                            <mo stretchy="false">(</mo>
                            <mrow>
                                <mn>i</mn>
                                <mo>-</mo>
                                <mi>J</mi>
                                <mo stretchy="false">)</mo>
                            </mrow>
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
                            <mo stretchy="false">(</mo>
                            <msup>
                                <mrow>
                                    <mn>1</mn>
                                    <mo>+</mo>
                                    <mi>J</mi>
                                    <mo stretchy="false">)</mo>
                                </mrow>
                                <mi>n</mi>
                            </msup>
                        </mrow>
                    </mfrac>
                    <mo stretchy="false">]</mo>
                </mrow>
            </math>

            <ul>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>VF</mi>
                        </mrow>
                    </math>: Valor futuro
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Valor de la primera cuota
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número del período a calcular
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>J</mi>
                        </mrow>
                    </math>: Gradiente (%)
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Tasa de interés
                </li>
            </ul>

            <div class="mb-3">
                <label for="vf" class="form-label">Valor futuro (VF):</label>
                <input type="number" class="form-control" id="vf" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número del período (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>

            <div class="mb-3">
                <label for="j" class="form-label">Gradiente (%):</label>
                <input type="number" class="form-control" id="j" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés:</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const VF = parseFloat(document.getElementById('vf').value);
            const n = parseFloat(document.getElementById('n').value);
            const J = parseFloat(document.getElementById('j').value);
            const i = parseFloat(document.getElementById('i').value);

            if (isNaN(VF) || isNaN(n) || isNaN(J) || isNaN(i) || VF <= 0 || n <= 0 || J <= 0 || i <= 0) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const A = VF * (((i - J) / 100) / (((1 + i / 100) ** n) - ((1 + J / 100) ** n)));
            return A.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor de la primera cuota calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcValorCuotaGradienteGeometricoCreciente() {
    Swal.fire({
        title: 'Calculadora de Gradiente Geométrico Creciente - Valor de la Cuota en el Período n',
        html: `
            <h4>Fórmula para calcular el valor de la cuota en el período n en un gradiente geométrico creciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                    <mi>C</mi>
                    <mi>n</mi>
                </msub>
                <mo>=</mo>
                <mi>A</mi>
                <mo>&#xD7;</mo>
                <mo stretchy="false">(</mo>
                <mn>1</mn>
                <mo>+</mo>
                <mi>J</mi>
                <msup>
                    <mo stretchy="false">)</mo>
                    <mrow data-mjx-texclass="ORD">
                        <mi>n</mi>
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                    </mrow>
                </msup>
            </math>

            <ul>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>C</mi>
                        </mrow>
                    </math>: Valor de la cuota en el período
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Valor de la primera cuota
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número del período a calcular
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>J</mi>
                        </mrow>
                    </math>: Gradiente (%)
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Tasa de interés
                </li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Valor de la primera cuota (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número del período (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>

            <div class="mb-3">
                <label for="j" class="form-label">Gradiente (%):</label>
                <input type="number" class="form-control" id="j" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés:</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const A = parseFloat(document.getElementById('a').value);
            const n = parseFloat(document.getElementById('n').value);
            const J = parseFloat(document.getElementById('j').value);

            if (isNaN(A) || isNaN(n) || isNaN(J)) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const Cn = A * (1 + J) ** (n - 1);
            return Cn.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor de la cuota en el período n calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcValorPresenteGradienteGeometricoDecreciente() {
    Swal.fire({
        title: 'Calculadora de Gradiente Geométrico Decreciente - Valor Presente',
        html: `
            <h4>Fórmula para calcular el valor presente en un gradiente geométrico decreciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mi>VP</mi>
                <mo>=</mo>
                <mi>A</mi>
                <mo>&#xD7;</mo>
                <mrow data-mjx-texclass="INNER">
                    <mo data-mjx-texclass="OPEN">[</mo>
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
                            <mo stretchy="false">(</mo>
                            <mn>1</mn>
                            <mo>+</mo>
                            <mi>J</mi>
                            <msup>
                                <mo stretchy="false">)</mo>
                                <mi>n</mi>
                            </msup>
                        </mrow>
                        <mrow>
                            <mo stretchy="false">(</mo>
                            <mi>J</mi>
                            <mo>+</mo>
                            <mi>i</mi>
                            <mo stretchy="false">)</mo>
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
                    <mo data-mjx-texclass="CLOSE">]</mo>
                </mrow>
            </math>

            <ul>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>VP</mi>
                        </mrow>
                    </math>: Valor presente
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Valor de la primera cuota
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número del período a calcular
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>J</mi>
                        </mrow>
                    </math>: Gradiente (%)
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Tasa de interés
                </li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Valor de la primera cuota (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número del período (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>

            <div class="mb-3">
                <label for="j" class="form-label">Gradiente (%):</label>
                <input type="number" class="form-control" id="j" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés:</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const A = parseFloat(document.getElementById('a').value);
            const n = parseFloat(document.getElementById('n').value);
            const J = parseFloat(document.getElementById('j').value);
            const i = parseFloat(document.getElementById('i').value);

            if (isNaN(A) || isNaN(n) || isNaN(J) || isNaN(i)) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const VP = A * (((1 + i) ** n - (1 + J) ** n) / ((J + i) * ((1 + i) ** n)));
            return VP.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor presente calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcValorFuturoGradienteGeometricoDecreciente() {
    Swal.fire({
        title: 'Calculadora de Gradiente Geométrico Decreciente - Valor Futuro',
        html: `
            <h4>Fórmula para calcular el valor futuro en un gradiente geométrico decreciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mrow>
                    <mi>VF</mi>
                    <mo>=</mo>
                    <mi>A</mi>
                    <mo>&#xD7;</mo>
                    <mo stretchy="false">[</mo>
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
                            <mo stretchy="false">(</mo>
                            <msup>
                                <mrow>
                                    <mn>1</mn>
                                    <mo>-</mo>
                                    <mi>J</mi>
                                    <mo stretchy="false">)</mo>
                                </mrow>
                                <mi>n</mi>
                            </msup>
                        </mrow>
                        <mrow>
                            <mo stretchy="false">(</mo>
                            <mi>J</mi>
                            <mo>+</mo>
                            <mi>i</mi>
                            <mo stretchy="false">)</mo>
                        </mrow>
                    </mfrac>
                    <mo stretchy="false">]</mo>
                </mrow>
            </math>

            <ul>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>VF</mi>
                        </mrow>
                    </math>: Valor futuro
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Valor de la primera cuota
                </li>

                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número del período a calcular

                </li>

                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>J</mi>
                        </mrow>
                    </math>: Gradiente (%)

                </li>

                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Tasa de interés

                </li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Valor de la primera cuota (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número del período (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>

            <div class="mb-3">
                <label for="j" class="form-label">Gradiente (%):</label>
                <input type="number" class="form-control" id="j" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés:</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const A = parseFloat(document.getElementById('a').value);
            const n = parseFloat(document.getElementById('n').value);
            const J = parseFloat(document.getElementById('j').value);
            const i = parseFloat(document.getElementById('i').value);

            if (isNaN(A) || isNaN(n) || isNaN(J) || isNaN(i)) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const VF = A * (((1 + i) ** n - (1 - J) ** n) / ((J + i) * ((1 + i) ** n)));
            return VF.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor futuro calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcValorPrimeraCuotaGradienteGeometricoDecreciente() {
    Swal.fire({
        title: 'Calculadora de Gradiente Geométrico Decreciente - Valor de la Primera Cuota',
        html: `
            <h4>Fórmula para calcular el valor de la primera cuota en un gradiente geométrico decreciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mrow>
                  <mi>A</mi>
                  <mo>=</mo>
                  <mi>VP</mi>
                  <mo>&#xD7;</mo>
                  <mo stretchy="false">[</mo>
                  <mfrac>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <mi>J</mi>
                      <mo>+</mo>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                      <mo>&#xD7;</mo>
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
                      <mo stretchy="false">(</mo>
                      <msup>
                        <mrow>
                          <mn>1</mn>
                          <mo>-</mo>
                          <mi>J</mi>
                          <mo stretchy="false">)</mo>
                        </mrow>
                        <mi>n</mi>
                      </msup>
                    </mrow>
                  </mfrac>
                  <mo stretchy="false">]</mo>
                </mrow>
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
                    </math>: Valor de la primera cuota
                </li>

                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número del período a calcular

                </li>

                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>J</mi>
                        </mrow>
                    </math>: Gradiente (%)

                </li>

                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Tasa de interés

                </li>
            </ul>

            <div class="mb-3">
                <label for="vp" class="form-label">Valor presente (VP):</label>
                <input type="number" class="form-control" id="vp" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número del período (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>

            <div class="mb-3">
                <label for="j" class="form-label">Gradiente (%):</label>
                <input type="number" class="form-control" id="j" step="any">
            </div>

            <div class="mb-3">
                <label for="i" class="form-label">Tasa de interés:</label>
                <input type="number" class="form-control" id="i" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const VP = parseFloat(document.getElementById('vp').value);
            const n = parseFloat(document.getElementById('n').value);
            const J = parseFloat(document.getElementById('j').value);
            const i = parseFloat(document.getElementById('i').value);

            if (isNaN(VP) || isNaN(n) || isNaN(J) || isNaN(i)) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const A = VP * ((J + i) * ((1 + i) ** n) / (((1 + i) ** n) - ((1 - J) ** n)));
            return A.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor de la primera cuota calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcValorCuotaPeriodoGradienteGeometricoDecreciente() {
    Swal.fire({
        title: 'Calculadora de Gradiente Geométrico Decreciente - Valor de la Cuota en el Período',
        html: `
            <h4>Fórmula para calcular el valor de la cuota en el período en un gradiente geométrico decreciente</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                    <mi>C</mi>
                    <mi>n</mi>
                </msub>
                <mo>=</mo>
                <mi>A</mi>
                <mo>&#xD7;</mo>
                <mo stretchy="false">(</mo>
                <mn>1</mn>
                <mo>-</mo>
                <mi>J</mi>
                <msup>
                    <mo stretchy="false">)</mo>
                    <mrow data-mjx-texclass="ORD">
                        <mi>n</mi>
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                    </mrow>
                </msup>
            </math>

            <ul>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>C</mi>
                        </mrow>
                    </math>: Valor cuota en el período <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>n</mi></mrow></math>
                </li>
                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>A</mi>
                        </mrow>
                    </math>: Valor de la primera cuota
                </li>

                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                    </math>: Número del período a calcular

                </li>

                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>J</mi>
                        </mrow>
                    </math>: Gradiente (%)

                </li>

                <li>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                    </math>: Tasa de interés

                </li>
            </ul>

            <div class="mb-3">
                <label for="a" class="form-label">Valor de la primera cuota (A):</label>
                <input type="number" class="form-control" id="a" step="any">
            </div>

            <div class="mb-3">
                <label for="n" class="form-label">Número del período (n):</label>
                <input type="number" class="form-control" id="n" step="any">
            </div>

            <div class="mb-3">
                <label for="j" class="form-label">Gradiente (%):</label>
                <input type="number" class="form-control" id="j" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const A = parseFloat(document.getElementById('a').value);
            const n = parseFloat(document.getElementById('n').value);
            const J = parseFloat(document.getElementById('j').value);

            if (isNaN(A) || isNaN(n) || isNaN(J)) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const Cn = A * (1 - J) ** (n - 1);
            return Cn.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Valor de la cuota en el período calculado: ${result.value}`,
                icon: 'success'
            });
        }
    });
}
