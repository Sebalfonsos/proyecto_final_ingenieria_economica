function calcularVPN() {
    Swal.fire({
        title: 'Calculadora de Valor Presente Neto (VPN)',
        html: `
            <h4>Fórmula VPN</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mi>V</mi>
                <mi>P</mi>
                <mi>N</mi>
                <mo>=</mo>
                <mo>&#x2212;</mo>
                <mi>V</mi>
                <mi>P</mi>
                <mo stretchy="false">(</mo>
                <mi>E</mi>
                <mi>g</mi>
                <mi>r</mi>
                <mi>e</mi>
                <mi>s</mi>
                <mi>o</mi>
                <mi>s</mi>
                <mo stretchy="false">)</mo>
                <mo>+</mo>
                <mo data-mjx-texclass="OP">&#x2211;</mo>
                <mi>V</mi>
                <mi>P</mi>
                <mo stretchy="false">(</mo>
                <mi>I</mi>
                <mi>n</mi>
                <mi>g</mi>
                <mi>r</mi>
                <mi>e</mi>
                <mi>s</mi>
                <mi>o</mi>
                <mi>s</mi>
                <mo stretchy="false">)</mo>
            </math>

            

            <div class="mb-3">
                <label for="egresos" class="form-label">Valor de los egresos:</label>
                <input type="number" class="form-control" id="egresos" step="any">
            </div>

            <div class="mb-3">
                <label for="ingresos" class="form-label">Valor de los ingresos (por período):</label>
                <input type="number" class="form-control" id="ingresos" step="any">
            </div>

            <div class="mb-3">
                <label for="periodos" class="form-label">Número de períodos:</label>
                <input type="number" class="form-control" id="periodos" step="1">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const egresos = parseFloat(document.getElementById('egresos').value);
            const ingresos = parseFloat(document.getElementById('ingresos').value);
            const periodos = parseInt(document.getElementById('periodos').value);

            if (isNaN(egresos) || isNaN(ingresos) || isNaN(periodos) || egresos < 0 || ingresos < 0 || periodos < 1) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const VPN = -egresos;
            for (let i = 0; i < periodos; i++) {
                VPN += ingresos;
            }
            return VPN.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `El Valor Presente Neto (VPN) calculado es: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcRelacionCostoBeneficio() {
    Swal.fire({
        title: 'Calculadora de Relación Costo/Beneficio',
        html: `
            <h4>Fórmula Relación Costo/Beneficio</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mi>B</mi>
                <mrow data-mjx-texclass="ORD">
                    <mo>/</mo>
                </mrow>
                <mi>C</mi>
                <mo>=</mo>
                <mfrac>
                    <mrow>
                        <mo data-mjx-texclass="OP">&#x2211;</mo>
                        <mi>B</mi>
                        <mi>e</mi>
                        <mi>n</mi>
                        <mi>e</mi>
                        <mi>f</mi>
                        <mi>i</mi>
                        <mi>c</mi>
                        <mi>i</mi>
                        <mi>o</mi>
                        <mi>s</mi>
                    </mrow>
                    <mrow>
                        <mi>C</mi>
                        <mi>o</mi>
                        <mi>s</mi>
                        <mi>t</mi>
                        <mi>o</mi>
                    </mrow>
                </mfrac>
            </math>

            <div class="mb-3">
                <label for="B" class="form-label">Valor del Beneficio (B):</label>
                <input type="number" class="form-control" id="B" step="any">
            </div>

            <div class="mb-3">
                <label for="C" class="form-label">Costo (C):</label>
                <input type="number" class="form-control" id="C" step="any">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const B = parseFloat(document.getElementById('B').value);
            const C = parseFloat(document.getElementById('C').value);

            if (isNaN(B) || isNaN(C)) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            const relacionCostoBeneficio = B / C;
            return relacionCostoBeneficio.toFixed(2);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `Relación Costo/Beneficio calculada: ${result.value}`,
                icon: 'success'
            });
        }
    });
}


function calcularTO() {
    Swal.fire({
        title: 'Calculadora de Valor Presente Neto (VPN) con Tasa de Oportunidad (T.O.)',
        html: `
            <h4>Fórmula T.O.</h4>
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mi>V</mi>
                <mi>P</mi>
                <msub>
                    <mi>N</mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi>T</mi>
                        <mo>.</mo>
                        <mi>O</mi>
                    </mrow>
                </msub>
                <mo>=</mo>
                <mo>&#x2212;</mo>
                <mi>P</mi>
                <mo>+</mo>
                <mfrac>
                    <mrow>
                        <mi>F</mi>
                        <mi>N</mi>
                        <msub>
                            <mi>E</mi>
                            <mn>1</mn>
                        </msub>
                    </mrow>
                    <mrow>
                        <mo stretchy="false">(</mo>
                        <mn>1</mn>
                        <mo>+</mo>
                        <mi>T</mi>
                        <mo>.</mo>
                        <mi>O</mi>
                        <msup>
                            <mo stretchy="false">)</mo>
                            <mn>1</mn>
                        </msup>
                    </mrow>
                </mfrac>
                <mo>+</mo>
                <mfrac>
                    <mrow>
                        <mi>F</mi>
                        <mi>N</mi>
                        <msub>
                            <mi>E</mi>
                            <mn>2</mn>
                        </msub>
                    </mrow>
                    <mrow>
                        <mo stretchy="false">(</mo>
                        <mn>1</mn>
                        <mo>+</mo>
                        <mi>T</mi>
                        <mo>.</mo>
                        <mi>O</mi>
                        <msup>
                            <mo stretchy="false">)</mo>
                            <mn>2</mn>
                        </msup>
                    </mrow>
                </mfrac>
                <mo>+</mo>
                <mo>&#x22EF;</mo>
                <mo>+</mo>
                <mfrac>
                    <mrow>
                        <mi>F</mi>
                        <mi>N</mi>
                        <msub>
                            <mi>E</mi>
                            <mi>n</mi>
                        </msub>
                    </mrow>
                    <mrow>
                        <mo stretchy="false">(</mo>
                        <mn>1</mn>
                        <mo>+</mo>
                        <mi>T</mi>
                        <mo>.</mo>
                        <mi>O</mi>
                        <msup>
                            <mo stretchy="false">)</mo>
                            <mi>n</mi>
                        </msup>
                    </mrow>
                </mfrac>
            </math>

            <ul>
                <li>VPN: Valor Presente Neto</li>
            </ul>

            <div class="mb-3">
                <label for="P" class="form-label">Valor presente de la inversión (P):</label>
                <input type="number" class="form-control" id="P" step="any">
            </div>

            <div class="mb-3">
                <label for="FN1" class="form-label">Flujo de efectivo neto para el período 1 (FN1):</label>
                <input type="number" class="form-control" id="FN1" step="any">
            </div>

            <div class="mb-3">
                <label for="FN2" class="form-label">Flujo de efectivo neto para el período 2 (FN2):</label>
                <input type="number" class="form-control" id="FN2" step="any">
            </div>

            <!-- Agrega más campos según sea necesario para los flujos de efectivo adicionales -->

            <div class="mb-3">
                <label for="T" class="form-label">Tasa de oportunidad (T):</label>
                <input type="number" class="form-control" id="T" step="any">
            </div>

            <div class="mb-3">
                <label for="O" class="form-label">Número de oportunidades (O):</label>
                <input type="number" class="form-control" id="O" step="1">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Calcular',
        preConfirm: () => {
            const P = parseFloat(document.getElementById('P').value);
            const FN1 = parseFloat(document.getElementById('FN1').value);
            const FN2 = parseFloat(document.getElementById('FN2').value);
            // Agrega más variables para los flujos de efectivo adicionales según sea necesario
            const T = parseFloat(document.getElementById('T').value);
            const O = parseInt(document.getElementById('O').value);

            if (isNaN(P) || isNaN(FN1) || isNaN(FN2) || isNaN(T) || isNaN(O) || P < 0 || O < 1) {
                Swal.showValidationMessage('Por favor, ingrese valores válidos para realizar los cálculos.');
                return false;
            }

            let VPN = -P;
            VPN += FN1 / Math.pow((1 + T * O), 1);
            VPN += FN2 / Math.pow((1 + T * O), 2);
            // Agrega más líneas según sea necesario para los flujos de efectivo adicionales

            return VPN.toFixed(2);
        }
        
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Resultado',
                html: `El Valor Presente Neto (VPN) con Tasa de Oportunidad ingresada es: <strong>${result.value}.</strong>`,
                icon: 'success'
            });
        }
    });
}

