    const valueStages = [
      {
        id: "network",
        type: "Cadena de valor",
        title: "Network & Fleet Planning",
        definition: "Mejora decisiones de rutas, frecuencias, horarios y gauge con lectura integrada de demanda, rentabilidad y fragilidad operativa.",
        pains: ["Decisiones de red lentas", "Capacidad mal asignada", "Propagación de demoras"],
        image: "images/loops/cdv1.jpg",
        video: "videos/loops/cdv1.mp4",
        cases: [
          {
            name: "Route Insights & Demand Sensing",
            decision: "Qué rutas, frecuencias y capacidad priorizar antes de que el margen se erosione.",
            pain: "La red se ajusta tarde porque revenue, market share y desempeño forward/flown se leen en vistas fragmentadas.",
            solution: "Integra demanda flown y forward, rentabilidad, fares y señales competitivas en una vista unificada para priorizar rutas, frecuencias y gauge con mayor velocidad y criterio económico."
          },
          {
            name: "Schedule Robustness Analytics",
            decision: "Dónde reforzar buffers o rediseñar horarios para proteger completion factor y utilización real.",
            pain: "Schedules comercialmente atractivos terminan siendo frágiles y amplifican retrasos a través de la red.",
            solution: "Mide la robustez del schedule por vuelo, rotación y banco, simula propagación de demoras y recomienda ajustes de buffers u horarios antes de que la fragilidad impacte la operación."
          }
        ]
      },
      {
        id: "revenue",
        type: "Cadena de valor",
        title: "Pricing & Revenue Management",
        definition: "Mejora decisiones de forecast, pricing e ingresos complementarios para capturar valor por asiento y contexto comercial.",
        pains: ["Forecast rígido", "Pricing poco contextual", "Ancillaries submonetizados"],
        image: "images/loops/cdv2.jpg",
        video: "videos/loops/cdv2.mp4",
        cases: [
          {
            badge: "Predictive ML & Automation",
            name: "Revenue Forecast Model Ecosystem",
            headline: "Automatiza proyecciones diarias de tarifas, ocupación y ancillaries para acelerar la toma de decisiones.",
            decision: "Cómo ajustar inventory y pricing con un forecast dinámico y confiable útil para Revenue Management.",
            pain: "El forecast manual o rígido limita la velocidad de reacción frente a shocks comerciales y reduce la precisión en ingresos.",
            solution: "Estandariza fuentes comerciales, automatiza corridas de forecast y publica una lectura diaria de demanda, bookings, fares y ancillaries para acelerar decisiones de inventory y pricing.",
            visual: "forecast"
          },
          {
            badge: "Prescriptive ML & Personalization",
            name: "Dynamic Ancillary Pricing & Offer Personalization",
            headline: "Captura el máximo willingness-to-pay ofreciendo el bundle y precio correcto según el perfil del viajero.",
            decision: "Qué bundle y precio ofrecer según contexto, canal y propensión del pasajero.",
            pain: "Los ancillaries suelen venderse con listas fijas y baja personalización, dejando margen significativo sin capturar.",
            solution: "Ajusta bundles y precios de equipaje, asientos o upgrades según contexto de compra, canal, perfil y comportamiento del pasajero, activando ofertas más relevantes en cada punto del journey.",
            visual: "ancillary"
          },
          {
            badge: "Econometrics & Attribution ML",
            name: "MROI Center of Excellence & Budget Optimizer (LATAM Hub)",
            headline: "Optimiza el ROI de marketing y la rentabilidad por ruta eliminando la inversión en tráfico no incremental.",
            decision: "Cómo distribuir óptimamente el presupuesto de comercialización entre canales y rutas, aislando las compras orgánicas de la conversión causada por medios.",
            pain: "Presupuestos asignados con datos históricos manuales o modelos de atribución sesgados que sobreestiman el ROI en rutas de alta demanda estacional.",
            solution: "Hub de medición de retorno (MROI CoE) que integra Marketing Mix Modeling (Google Meridian), Atribución Multicanal (MTA) y tests de incrementalidad para calibrar pujas y maximizar el margen de ingresos.",
            visual: "mroi"
          }
        ]
      },
      {
        id: "distribution",
        type: "Cadena de valor",
        title: "Sales & Distribution",
        definition: "Mejora decisiones de mix de canales, agencias y POS para crecer sin sacrificar margen comercial.",
        pains: ["Costo de distribución opaco", "Canales sin rentabilidad clara", "Fugas de margen"],
        image: "images/loops/cdv3.jpg",
        video: "videos/loops/cdv3.mp4",
        cases: [
          {
            badge: "Financial Analytics & Lakehouse",
            name: "Cost of Distribution & CER Optimization per Channel",
            headline: "Transparencia total del costo de distribución para capturar fugas invisibles de margen.",
            decision: "Qué volumen y rutas migrar activamente entre GDS, OTAs, NDC y canal directo para maximizar la contribución neta por billete.",
            pain: "Desconexión entre bookings, comisiones e incentivos que impide medir el Cost Effectiveness Revenue (CER) real por agencia y punto de venta.",
            solution: "Plataforma de análisis de distribución que cruza datos transaccionales de reservaciones y costos para calcular el CER dinámico y recomendar el mix de mayor rentabilidad.",
            visual: "cer"
          },
          {
            badge: "Prescriptive ML & Elasticity Modeling",
            name: "B2B Incentives & Corporate Agreement Optimization",
            headline: "Elimina la dependencia de software de terceros y optimiza contratos de agencias y corporativos.",
            decision: "Estructuración y ajuste en tiempo real de programas tácticos de incentivos B2B respaldados por inteligencia predictiva.",
            pain: "Vendor lock-in con proveedores legacy rígidos, tabulación manual de contratos e incapacidad para simular el impacto en volumen y rentabilidad de un incentivo.",
            solution: "Ecosistema propietario de analítica avanzada que modela elasticidad y asigna metas óptimas, integrando la liquidación y firma electrónica de contratos.",
            visual: "b2b"
          },
          {
            badge: "GenAI & Multi-Agent System",
            name: "AI Digital Concierge & Direct Channel Attach Rate",
            headline: "Convierte el sitio web y la app en un motor de ventas proactivo y personalizado 24/7.",
            decision: "Personalización contextual de la oferta y ancillaries durante todo el funnel de compra para acelerar la conversión directa.",
            pain: "Chatbots de soporte rígidos limitados a FAQ estáticos que no aprovechan las señales de intención del usuario ni personalizan la venta cruzada.",
            solution: "Conserje digital con IA Generativa integrado a la CDP y PSS capaz de asesorar al pasajero, predecir compras y ejecutar transacciones de ancillaries de manera autónoma.",
            visual: "concierge"
          }
        ]
      },
      {
        id: "occ",
        title: "Flight Operations & OCC",
        type: "Cadena de valor",
        definition: "Mejora decisiones de recuperación operativa y priorización de demoras con visión económica total de la red.",
        pains: ["OCC en silos", "Recuperación reactiva", "Costo total invisible"],
        image: "images/loops/cdv4.jpg",
        video: "videos/loops/cdv4.mp4",
        cases: [
          {
            badge: "Mixed-Integer Optimization & ML",
            name: "Total Cost of Disruption & Operational Recovery Control Tower",
            headline: "Preserva el OTP y minimiza en hasta un 20% el costo en cascada por compensaciones y reacomodos.",
            decision: "Cuál es la alternativa de recuperación operacional óptima que minimiza el costo financiero global, la penalización regulatoria y el impacto al pasajero ante contingencias.",
            pain: "Recuperación reactiva en silos donde cada área (flota, tripulaciones, rampa) optimiza localmente, invisibilizando el costo real de disrupción de la red.",
            solution: "Torre de control operacional que evalúa en tiempo real escenarios combinados de red, tripulación y CX para recomendar la mejor acción de recuperación.",
            visual: "tower"
          },
          {
            badge: "Predictive ML & Shift Optimization",
            name: "Ground Personnel Optimization & Workforce Forecasting",
            headline: "Maximiza el P&L diario alineando la capacidad en tierra con la demanda operacional real.",
            decision: "Asignación precisa de cuadrillas (volumen, ubicación y horario) en puerta y rampa para asegurar turnarounds eficientes sin incurrir en horas extra.",
            pain: "Planificación estática de personal no sincronizada con demoras o cambios de itinerario en tiempo real, generando cuellos de botella operacionales o sobrecostos de contratación.",
            solution: "Motor predictivo de demanda operativa acoplado a un algoritmo de optimización matemática que asigna turnos considerando restricciones de RRHH y SLAs de handling.",
            visual: "ground"
          },
          {
            badge: "Operational Analytics & ML",
            name: "Fuel Efficiency & Flight Route Optimization Engine",
            headline: "Reduce el consumo de Jet-A1 y las emisiones de CO₂ mediante optimización predictiva de rutas y peso.",
            decision: "Cuánta carga óptima de combustible llevar (Fuel Tankering) y qué perfiles de vuelo/altitud ajustar para minimizar el burn rate sin comprometer la seguridad.",
            pain: "Volatilidad del costo de combustible y rutas subóptimas que absorben presupuesto operativo y aumentan las penalizaciones por emisiones de carbono.",
            solution: "Motor analítico que cruza meteorología, peso de aeronave, precios de Jet-A1 por estación y slots de vuelo para recomendar la estrategia óptima de carga y ruta en tiempo real.",
            visual: "fuel"
          }
        ]
      },
      {
        id: "ground",
        title: "Ground Operations & Customer Experience",
        type: "Cadena de valor",
        definition: "Mejora decisiones de staffing, capacidad belly y atención en crisis para proteger puntualidad y experiencia.",
        pains: ["Staffing reactivo", "Capacidad belly incierta", "IRROPS saturan atención"],
        image: "images/loops/cdv5.jpg",
        video: "videos/loops/cdv5.mp4",
        cases: [
          {
            name: "Airport Flow Forecasting",
            decision: "Cómo planificar staffing y abastecimiento en check-in, lounges y operación de aeropuerto.",
            pain: "La planificación llega tarde y produce colas evitables, desperdicio operativo o quiebre de insumos.",
            solution: "Proyecta volúmenes por franja horaria para anticipar necesidades de personal, capacidad e insumos en check-in, salones y otros puntos críticos de atención."
          },
          {
            name: "Baggage Load & Cargo Capacity Prediction",
            decision: "Cuánta capacidad belly puede venderse y cómo planificar despacho con más certeza.",
            pain: "El peso y volumen de equipaje se estiman tarde, generando subventa o sorpresas operativas.",
            solution: "Predice peso y volumen de equipaje por vuelo con anticipación para exponer capacidad belly disponible y mejorar decisiones comerciales y operativas de carga."
          },
          {
            name: "Self-Service Disruption Management",
            decision: "Qué opciones ofrecer al pasajero y cuándo escalar solo los casos que realmente requieren intervención humana.",
            pain: "En IRROPS colapsan counters y call center, sube el costo de atención y cae la experiencia.",
            solution: "Orquesta rebooking, vouchers y alternativas de autogestión en canales digitales para resolver casos estándar rápidamente y derivar solo las excepciones al equipo humano."
          }
        ]
      },
      {
        id: "crew",
        title: "Tripulación / Crew Planning",
        type: "Backoffice",
        definition: "Mejora decisiones preventivas sobre disponibilidad, legalidad y readiness de tripulación antes de la contingencia.",
        pains: ["Problemas visibles tarde", "Overtime costoso", "Riesgo de compliance"],
        image: "images/loops/bo1.jpg",
        video: "videos/loops/bo1.mp4",
        cases: [
          {
            name: "Crew Analytics & Recovery Readiness Cockpit",
            decision: "Qué vuelos o rotaciones están en riesgo y dónde intervenir antes de perder continuidad operativa.",
            pain: "Los problemas de tripulación suelen hacerse visibles tarde, generando overtime, cancelaciones y riesgos regulatorios.",
            solution: "Integra roster, training, ausentismo, legalidad y contexto operativo en un cockpit único para anticipar riesgos y activar acciones preventivas antes de la contingencia."
          }
        ]
      },
      {
        id: "mro",
        title: "MRO & Engineering",
        type: "Backoffice",
        definition: "Mejora decisiones de intervención, inventario y abastecimiento técnico para reducir AOG y capital inmovilizado.",
        pains: ["Fallas no planificadas", "Inventario defensivo", "Visibilidad limitada de repuestos"],
        image: "images/loops/bo2.jpg",
        video: "videos/loops/bo2.mp4",
        cases: [
          {
            name: "Predictive MRO & AOG Prevention",
            decision: "Qué componente intervenir, cuándo hacerlo y dónde posicionar capacidad técnica antes de un AOG.",
            pain: "Las fallas no planificadas disparan cancelaciones, baja disponibilidad y exceso de stock de seguridad.",
            solution: "Combina historial técnico, sensores y contexto de mantenimiento para anticipar fallas, planificar intervenciones y posicionar recursos antes de que el evento afecte la operación."
          },
          {
            name: "Spare Parts & Procurement Control Tower",
            decision: "Qué repuestos priorizar y dónde actuar primero para evitar stockouts con impacto operativo real.",
            pain: "Compras y abastecimiento operan con poca visibilidad sobre cuellos de botella y riesgo de exposición AOG.",
            solution: "Da visibilidad punta a punta del flujo de requisición y compra de repuestos para priorizar partes críticas, alertar retrasos y reducir exposición operativa por faltantes."
          }
        ]
      },
      {
        id: "finance",
        title: "Finanzas y Soporte Corporativo",
        type: "Backoffice",
        definition: "Mejora decisiones de cierre, conciliación y performance management para dirigir con una sola historia financiera.",
        pains: ["Cierres lentos", "Revenue accounting manual", "KPIs en silos"],
        image: "images/loops/bo3.jpg",
        video: "videos/loops/bo3.mp4",
        cases: [
          {
            name: "Revenue Accounting Exception Automation",
            decision: "Qué excepciones resolver automáticamente y cuáles escalar al analista para acelerar caja y cierre.",
            pain: "El backlog manual y las conciliaciones complejas frenan reconocimiento de ingresos y dejan leakage sin atender.",
            solution: "Cruza tickets, EMD, refunds, cupones flown e interline para resolver automáticamente casos estándar y enfocar al analista en las excepciones que realmente requieren revisión."
          },
          {
            name: "Executive Performance & Finance Cockpit",
            decision: "Dónde priorizar acciones de revenue, OPEX, cash o transformación con lectura común a nivel C-level.",
            pain: "Liderazgo financiero y operativo mira métricas en silos y le cuesta explicar desvíos o seguir impacto real.",
            solution: "Consolida KPIs comerciales, operativos y financieros en una vista ejecutiva común para entender desvíos, seguir prioridades y alinear decisiones de performance management."
          }
        ]
      }
    ];

    const state = {
      stageId: "network"
    };

    const routeMap = document.querySelector("#route-map");
    const stageSpotlight = document.querySelector("#stage-spotlight");

    function activeStage() {
      return valueStages.find((stage) => stage.id === state.stageId) || valueStages[0];
    }

    function renderStageCard(stage, index, compact = false) {
      return `
        <button
          type="button"
          class="route-node ${compact ? "compact" : ""} ${stage.id === state.stageId ? "active" : ""}"
          data-stage="${stage.id}"
          aria-pressed="${stage.id === state.stageId}"
        >
          <img class="route-node-bg" src="${stage.image}" alt="" aria-hidden="true">
          <span class="route-node-content">
            <span class="node-topline">
              <span class="node-dot">${String(index + 1).padStart(2, "0")}</span>
              <span class="node-type">${stage.type}</span>
            </span>
            <span>
              <strong>${stage.title}</strong>
              <small>${stage.cases.length} casos de uso</small>
            </span>
          </span>
        </button>
      `;
    }

    function renderRoute() {
      const mainStages = valueStages.filter((stage) => stage.type === "Cadena de valor");
      const backofficeStages = valueStages.filter((stage) => stage.type === "Backoffice");
      routeMap.innerHTML = `
        <div>
          <p class="route-strip-title">Áreas clave del negocio</p>
          <div class="route-grid-main">
            ${mainStages.map((stage, index) => renderStageCard(stage, index)).join("")}
          </div>
        </div>
        <div>
          <p class="route-strip-title">Capacidades transversales</p>
          <div class="route-grid-backoffice">
            ${backofficeStages.map((stage, index) => renderStageCard(stage, index, true)).join("")}
          </div>
        </div>
      `;
    }

    // Timer del chat del conserje (mockup Caso 3). Se limpia solo al re-renderizar.
    let sdChatTimer = null;

    // Mockups visuales (CSS/JS puro, sin video ni base64) para Sales & Distribution.
    function renderSDVisual(kind) {
      if (kind === "cer") {
        return `
          <div class="sd-viz cer-viz">
            <div class="sd-viz-head"><span class="sd-viz-title">Costo por reserva</span><span class="sd-viz-live">LIVE</span></div>
            <div class="cer-rows">
              <div class="cer-row"><span class="cer-label">GDS</span><span class="cer-bar"><span class="cer-fill cer-fill--hi" style="--w:100%"></span></span><span class="cer-val">$14.50</span></div>
              <div class="cer-row"><span class="cer-label">NDC</span><span class="cer-bar"><span class="cer-fill cer-fill--mid" style="--w:29%"></span></span><span class="cer-val">$4.20</span></div>
              <div class="cer-row"><span class="cer-label">Direct</span><span class="cer-bar"><span class="cer-fill cer-fill--lo" style="--w:8%"></span></span><span class="cer-val">$1.10</span></div>
            </div>
            <div class="cer-foot"><span class="cer-foot-label">Ahorro potencial de margen</span><span class="cer-badge">+$1.9M USD</span></div>
          </div>`;
      }
      if (kind === "b2b") {
        return `
          <div class="sd-viz b2b-viz">
            <div class="sd-viz-head"><span class="sd-viz-title">Simulador de incentivos</span><span class="sd-viz-live">ML</span></div>
            <svg class="b2b-curve" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
              <defs><linearGradient id="b2bGrad" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="rgba(125,211,252,0.34)"></stop><stop offset="1" stop-color="rgba(125,211,252,0)"></stop></linearGradient></defs>
              <path class="b2b-area" d="M2,50 Q50,4 98,44 L98,60 L2,60 Z" fill="url(#b2bGrad)"></path>
              <path class="b2b-line" d="M2,50 Q50,4 98,44"></path>
              <circle id="sdCurveDot" class="b2b-dot" cx="50" cy="15.5" r="2.8"></circle>
            </svg>
            <div class="b2b-control">
              <label class="b2b-ctl-label" for="sdShareSlider">Meta de market share <b id="sdShareVal">60%</b></label>
              <input id="sdShareSlider" class="b2b-slider" type="range" min="0" max="100" value="60" aria-label="Meta de market share">
            </div>
            <div class="b2b-readouts">
              <div class="b2b-kpi"><span>Margen resultante</span><b id="sdMarginVal">$5.6M</b></div>
              <div class="b2b-kpi"><span>Elasticidad</span><b id="sdElastVal">1.16</b></div>
            </div>
          </div>`;
      }
      if (kind === "tower") {
        return `
          <div class="sd-viz tower-viz">
            <div class="sd-viz-head"><span class="sd-viz-title">Torre de recuperación</span><span class="sd-viz-live sd-viz-live--alert">ALERT</span></div>
            <div class="tower-grid">
              <div class="tower-flight"><b>AR1234</b><span>GRU→EZE</span><i class="st st--ok">En hora</i></div>
              <div class="tower-flight tower-flight--delay"><b>AR2201</b><span>EZE→SCL</span><i class="st st--delay">Demora 62'</i></div>
              <div class="tower-flight"><b>AR3310</b><span>SCL→BOG</span><i class="st st--ok">En hora</i></div>
            </div>
            <div class="tower-panel">
              <div class="tower-panel-head"><span>Opciones de recuperación</span> · EZE</div>
              <div class="tower-opt tower-opt--best"><span class="tower-opt-name">Reasignar aeronave</span><span class="tower-opt-cost">$420K</span></div>
              <div class="tower-opt"><span class="tower-opt-name">Reacomodo + hotel</span><span class="tower-opt-cost">$680K</span></div>
              <div class="tower-opt"><span class="tower-opt-name">Cancelar + comp.</span><span class="tower-opt-cost">$1.1M</span></div>
            </div>
          </div>`;
      }
      if (kind === "ground") {
        return `
          <div class="sd-viz ground-viz">
            <div class="sd-viz-head"><span class="sd-viz-title">Optimización de turnos</span><span class="sd-viz-live">ML</span></div>
            <div class="gantt">
              <div class="gantt-peaks"><span style="--h:40%"></span><span style="--h:70%"></span><span style="--h:100%"></span><span style="--h:62%"></span><span style="--h:88%"></span><span style="--h:34%"></span></div>
              <div class="gantt-row"><span class="gantt-lbl">Rampa</span><span class="gantt-track"><span class="gantt-block gantt-block--a"></span></span></div>
              <div class="gantt-row"><span class="gantt-lbl">Puerta</span><span class="gantt-track"><span class="gantt-block gantt-block--b"></span></span></div>
              <div class="gantt-row"><span class="gantt-lbl">Bodega</span><span class="gantt-track"><span class="gantt-block gantt-block--c"></span></span></div>
              <div class="gantt-axis"><span>06h</span><span>10h</span><span>14h</span><span>18h</span></div>
            </div>
            <div class="gantt-foot"><span>Turnarounds cubiertos</span><b>98%</b></div>
          </div>`;
      }
      if (kind === "fuel") {
        return `
          <div class="sd-viz fuel-viz">
            <div class="sd-viz-head"><span class="sd-viz-title">Optimización de combustible</span><span class="sd-viz-live">ML</span></div>
            <svg class="fuel-chart" viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true">
              <defs><linearGradient id="fuelGrad" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="rgba(56,211,159,0.30)"></stop><stop offset="1" stop-color="rgba(56,211,159,0)"></stop></linearGradient></defs>
              <path class="fuel-base" d="M2,10 C30,12 55,17 98,22"></path>
              <path class="fuel-area" d="M2,20 C30,26 55,33 98,40 L98,46 L2,46 Z" fill="url(#fuelGrad)"></path>
              <path class="fuel-opt" d="M2,20 C30,26 55,33 98,40"></path>
            </svg>
            <div class="fuel-legend">
              <span class="fuel-leg fuel-leg--base">Plan base</span>
              <span class="fuel-leg fuel-leg--opt">Ruta + tankering óptimo</span>
            </div>
            <div class="fuel-foot">
              <div class="fuel-kpi"><span>CO₂ evitado</span><b>-4.1%</b></div>
              <span class="fuel-badge">-3.8% Fuel Burn / +$2.4M USD</span>
            </div>
          </div>`;
      }
      if (kind === "forecast") {
        return `
          <div class="sd-viz fc-viz">
            <div class="sd-viz-head"><span class="sd-viz-title">Forecast diario</span><span class="sd-viz-live">ML</span></div>
            <svg class="fc-chart" viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true">
              <defs><linearGradient id="fcGrad" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="rgba(125,211,252,0.32)"></stop><stop offset="1" stop-color="rgba(125,211,252,0)"></stop></linearGradient></defs>
              <path class="fc-area" d="M2,34 C28,28 58,20 98,12 L98,46 L2,46 Z" fill="url(#fcGrad)"></path>
              <path class="fc-demand" d="M2,34 C28,28 58,20 98,12"></path>
              <path class="fc-occ" d="M2,40 C30,37 60,31 98,25"></path>
            </svg>
            <div class="fc-legend"><span class="fc-leg fc-leg--d">Demanda</span><span class="fc-leg fc-leg--o">Ocupación</span></div>
            <div class="fc-foot">
              <div class="fc-kpi"><span>Demanda 30d</span><b>+6.4%</b></div>
              <div class="fc-kpi"><span>Load factor</span><b>84%</b></div>
              <div class="fc-kpi"><span>Corridas/día</span><b>24</b></div>
            </div>
          </div>`;
      }
      if (kind === "ancillary") {
        return `
          <div class="sd-viz anc-viz">
            <div class="sd-viz-head"><span class="sd-viz-title">Matriz de precios dinámicos</span><span class="sd-viz-live">ML</span></div>
            <div class="anc-matrix">
              <span class="anc-h"></span><span class="anc-h">Equipaje</span><span class="anc-h">Asiento</span><span class="anc-h">Upgrade</span>
              <span class="anc-seg">Business</span><span class="anc-cell">$32</span><span class="anc-cell">$18</span><span class="anc-cell">$120</span>
              <span class="anc-seg">Familia</span><span class="anc-cell">$24</span><span class="anc-cell">$12</span><span class="anc-cell">$0</span>
              <span class="anc-seg">Leisure</span><span class="anc-cell">$28</span><span class="anc-cell">$9</span><span class="anc-cell">$75</span>
            </div>
            <div class="anc-foot"><span>Uplift de conversión</span><b>+11%</b></div>
          </div>`;
      }
      if (kind === "mroi") {
        return `
          <div class="sd-viz mroi-viz">
            <div class="sd-viz-head"><span class="sd-viz-title">MROI CoE · LATAM Hub</span><span class="sd-viz-live">ML</span></div>
            <div class="mroi-tri">
              <svg viewBox="0 0 100 74" preserveAspectRatio="none" aria-hidden="true">
                <polygon class="mroi-edge" points="50,8 90,66 10,66"></polygon>
                <line class="mroi-spoke mroi-spoke--1" x1="50" y1="44" x2="50" y2="8"></line>
                <line class="mroi-spoke mroi-spoke--2" x1="50" y1="44" x2="90" y2="66"></line>
                <line class="mroi-spoke mroi-spoke--3" x1="50" y1="44" x2="10" y2="66"></line>
                <circle class="mroi-core" cx="50" cy="44" r="4.5"></circle>
              </svg>
              <span class="mroi-node mroi-node--t">MMM</span>
              <span class="mroi-node mroi-node--r">MTA</span>
              <span class="mroi-node mroi-node--l">Experiments</span>
            </div>
            <div class="mroi-routes">
              <div class="mroi-route"><span>GRU–SCL</span><span class="mroi-bar"><i style="--w:82%"></i></span></div>
              <div class="mroi-route"><span>LIM–BOG</span><span class="mroi-bar"><i style="--w:58%"></i></span></div>
              <div class="mroi-route"><span>EZE–MIA</span><span class="mroi-bar"><i style="--w:94%"></i></span></div>
            </div>
            <div class="mroi-foot"><span class="mroi-badge">+18% Incremental Margin Lift</span></div>
          </div>`;
      }
      // concierge
      return `
        <div class="sd-viz chat-viz">
          <div class="sd-viz-head"><span class="sd-viz-title">Asistente de viaje IA</span><span class="sd-viz-live">GENAI</span></div>
          <div class="chat-body" id="sdChat">
            <div class="chat-msg chat-msg--user" data-step="0">Vuelo a Madrid en junio, viajo con familia</div>
            <div class="chat-msg chat-msg--typing" data-step="1"><span></span><span></span><span></span></div>
            <div class="chat-msg chat-msg--ai" data-step="2">Te recomiendo 2 maletas + asientos juntos. ¿Los agrego?</div>
            <div class="chat-msg chat-msg--confirm" data-step="3">✓ Equipaje y asientos añadidos · +€86</div>
          </div>
        </div>`;
    }

    function renderSDCards(stage) {
      return `
        <div class="case-deep-title">Casos de uso de alto impacto</div>
        <div class="sd-cards">
          ${stage.cases.map((item) => `
            <article class="sd-card">
              <div class="sd-card-text">
                <div class="sd-badges"><span class="sd-badge">${item.badge}</span></div>
                <h4 class="sd-headline">${item.headline}</h4>
                <div class="sd-field"><strong>Decisión que mejora</strong><p>${item.decision}</p></div>
                <div class="sd-field"><strong>Dolor actual</strong><p>${item.pain}</p></div>
                <div class="sd-field"><strong>Solución</strong><p>${item.solution}</p></div>
              </div>
              <div class="sd-card-visual">${renderSDVisual(item.visual)}</div>
            </article>
          `).join("")}
        </div>`;
    }

    function initSDVisuals() {
      // Caso 2: slider de market share -> mueve el punto sobre la curva y actualiza KPIs.
      const slider = stageSpotlight.querySelector("#sdShareSlider");
      if (slider) {
        const dot = stageSpotlight.querySelector("#sdCurveDot");
        const shareOut = stageSpotlight.querySelector("#sdShareVal");
        const marginOut = stageSpotlight.querySelector("#sdMarginVal");
        const elastOut = stageSpotlight.querySelector("#sdElastVal");
        const P0 = [2, 50], P1 = [50, 4], P2 = [98, 44];
        const bez = (a, b, c, t) => (1 - t) * (1 - t) * a + 2 * (1 - t) * t * b + t * t * c;
        const update = () => {
          const s = +slider.value, t = s / 100;
          const cx = bez(P0[0], P1[0], P2[0], t);
          const cy = bez(P0[1], P1[1], P2[1], t);
          dot.setAttribute("cx", cx.toFixed(1));
          dot.setAttribute("cy", cy.toFixed(1));
          shareOut.textContent = s + "%";
          const margin = Math.max(2.2, Math.min(6, 2.2 + ((50 - cy) / 36) * 3.8));
          marginOut.textContent = "$" + margin.toFixed(1) + "M";
          elastOut.textContent = (0.6 + ((100 - s) / 100) * 1.4).toFixed(2);
        };
        slider.addEventListener("input", update);
        update();
      }
      // Caso 3: loop del chat del conserje, auto-terminante si se sale de la sección.
      const chat = stageSpotlight.querySelector("#sdChat");
      if (chat) {
        const steps = Array.prototype.slice.call(chat.querySelectorAll("[data-step]"));
        let i = 0;
        const tick = () => {
          if (!document.body.contains(chat)) return;
          if (i === 0) steps.forEach((el) => el.classList.remove("show"));
          if (i < steps.length) { steps[i].classList.add("show"); i++; }
          else { i = 0; }
          sdChatTimer = window.setTimeout(tick, i === 0 ? 1500 : (i === 2 ? 900 : 1150));
        };
        window.clearTimeout(sdChatTimer);
        tick();
      }
    }

    function renderSpotlight() {
      const stage = activeStage();
      const isRich = stage.cases.some((c) => c.visual);
      const detail = isRich
        ? renderSDCards(stage)
        : `
          <div class="case-deep-title">Deep-dive de casos por punto</div>
          <div class="case-accordion">
            ${stage.cases.map((item, index) => `
              <details ${index === 0 ? "open" : ""}>
                <summary>${item.name}<span aria-hidden="true">+</span></summary>
                <div class="case-body">
                  <div class="detail-card">
                    <strong>Decisión que mejora</strong>
                    <p>${item.decision}</p>
                  </div>
                  <div class="detail-card">
                    <strong>Dolor actual</strong>
                    <p>${item.pain}</p>
                  </div>
                  <div class="detail-card">
                    <strong>Solución</strong>
                    <p>${item.solution}</p>
                  </div>
                </div>
              </details>
            `).join("")}
          </div>`;
      stageSpotlight.innerHTML = `
        <div class="stage-media">
          <video src="${stage.video}" poster="${stage.image}" autoplay loop muted playsinline preload="metadata" aria-label="${stage.title}"></video>
        </div>
        <div class="stage-content">
          <div class="stage-kicker">
            <span class="meta-chip">${stage.type}</span>
            <span class="meta-chip">${stage.cases.length} casos de uso</span>
          </div>
          <h3>${stage.title}</h3>
          <p class="stage-summary">${stage.definition}</p>
          <div class="pain-cloud">
            ${stage.pains.map((pain) => `<span class="pain-chip">${pain}</span>`).join("")}
          </div>
          ${detail}
        </div>
      `;
      if (isRich) initSDVisuals();
    }

    function renderValueExplorer() {
      renderRoute();
      renderSpotlight();
      if (window.__retranslate) window.__retranslate();
    }

    routeMap.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-stage]");
      if (!button) return;
      state.stageId = button.dataset.stage;
      renderValueExplorer();
    });

renderValueExplorer();
if (window.location.hash) {
  setTimeout(() => scrollToSection(window.location.hash, false, "auto"), 100);
}
