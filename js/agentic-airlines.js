    /* ==========================================================
       AGENTES EN AEROLÍNEAS — datos e interacción
       Todo va dentro de una IIFE y los selectores se acotan a
       #agentic-airlines para no interferir con la landing.
       ========================================================== */
    (function () {
      var root = document.getElementById('agentic-airlines');
      if (!root) return;

      /* Re-traduce el contenido inyectado dinámicamente si el idioma activo es inglés.
         La define el script de i18n, que se ejecuta antes que este. */
      function retranslate() {
        if (typeof window.__retranslate === 'function') window.__retranslate();
      }

      const domains = [
        { id:'network', name:'Network & Fleet Planning', img:'value-network.jpg', score:2.9, maturity:3.1, viability:2.6, impact:3.0, tier:'low', read:'Alto valor estratégico, pero alta dependencia de simulación y sistemas legados.' },
        { id:'crew', name:'Crew Planning', img:'value-crew.jpg', score:3.4, maturity:3.7, viability:3.3, impact:3.2, tier:'medium', read:'Beneficio claro, pero restricciones legales y calidad de datos lo vuelven complejo.' },
        { id:'pricing', name:'Pricing & Revenue Management', img:'value-pricing.jpg', score:4.3, maturity:4.5, viability:4.1, impact:4.2, tier:'high', read:'Mejor equilibrio entre datos, monetización y gobernanza.' },
        { id:'distribution', name:'Sales & Distribution', img:'value-distribution.jpg', score:4.3, maturity:4.4, viability:4.3, impact:4.3, tier:'high', read:'Canal directo y conversaciones transaccionales: la vía más rápida a ingresos.' },
        { id:'ground', name:'Ground Operations & CX', img:'value-ground.jpg', score:3.9, maturity:4.0, viability:4.0, impact:3.8, tier:'medium', read:'Terreno fértil para asistentes y automatización de disrupciones en tiempo real.' },
        { id:'occ', name:'Flight Ops & OCC', img:'value-occ.jpg', score:3.6, maturity:3.9, viability:3.4, impact:3.5, tier:'medium', read:'Casos sólidos ya en producción con sensibilidad operativa alta.' },
        { id:'mro', name:'MRO & Engineering', img:'value-mro.jpg', score:3.7, maturity:3.9, viability:3.5, impact:3.6, tier:'medium', read:'Despliegues reales y medibles en mantenimiento predictivo.' },
        { id:'finance', name:'Finance & Support', img:'value-finance.jpg', score:3.6, maturity:3.5, viability:4.0, impact:3.4, tier:'medium', read:'Fácil de iniciar con copilotos internos.' },
      ];

      const areas = [
        {
          tag: 'Foco #1 · Pricing & Revenue Management',
          title: 'Pricing & Revenue Management',
          desc: 'El copiloto de precios y ancillaries con mejor equilibrio entre monetización y gobernanza.',
          img: 'commercial-ai.jpg',
          processes: [
            {
              name: 'Dynamic Pricing de Ancillaries',
              teaser: 'De ajustes manuales a un agente que ejecuta pricing dentro de guardrails.',
              problem: 'Precios sin optimización dinámica por falta de ajuste en tiempo real.',
              value: '+10-15% en ingresos por ancillaries. Decisiones en minutos.',
              stages: [
                {l:'AS-IS', t:'Pricing manual', c:'Revisión manual diferida.'},
                {l:'Fase 1', t:'Copiloto inteligente', c:'Propuestas aprobadas por humanos.'},
                {l:'Fase 2', t:'Agente condicionado', c:'Ejecución bajo margen auditado.'},
                {l:'TO-BE', t:'Sistema agéntico', c:'Ajustes continuos con trazabilidad.'},
              ]
            }
          ]
        },
        {
          tag: 'Foco #2 · Sales & Distribution',
          title: 'Sales & Distribution',
          desc: 'Conversaciones transaccionales en el canal directo.',
          img: 'value-distribution.jpg',
          processes: [
            {
              name: 'Customer Service en Canales Digitales',
              teaser: 'Agente omnichannel que cotiza, cambia y vende.',
              problem: 'Llamadas costosas y resolución lenta en momentos de estrés.',
              value: '-70% en costo por interacción. 85-95% contención.',
              stages: [
                {l:'AS-IS', t:'Contact center saturado', c:'Tiempos de espera largos.'},
                {l:'Fase 1', t:'Chatbot FAQ', c:'Preguntas frecuentes simples.'},
                {l:'Fase 2', t:'Agente transaccional', c:'Cotiza y reserva directo en PSS.'},
                {l:'TO-BE', t:'Omnichannel completo', c:'Memoria unificada web/app/WA.'},
              ]
            }
          ]
        },
        {
          tag: 'Foco #3 · Ground Operations & CX',
          title: 'Ground Operations & CX',
          desc: 'Anticipación en momentos críticos del viaje.',
          img: 'operations-ai.jpg',
          processes: [
            {
              name: 'Disruption Management (IROPS)',
              teaser: 'Soluciones automáticas antes de que el pasajero reclame.',
              problem: 'Avalancha de contactos y desinformación durante retrasos.',
              value: '-50% contactos pico. Costos de disrupción -30%.',
              stages: [
                {l:'AS-IS', t:'Información reactiva', c:'Avisos tardíos en aeropuerto.'},
                {l:'Fase 1', t:'Push automático', c:'SMS/app genérico.'},
                {l:'Fase 2', t:'Agente ofertor', c:'Rebooking y vouchers automáticos.'},
                {l:'TO-BE', t:'Orquestador de crisis', c:'Predice e interviene en tiempo real.'},
              ]
            }
          ]
        }
      ];

      const journey = [
        { id:'busqueda', label:'Búsqueda & Inspiración', short:'Búsqueda', phase:'En tierra',
          exp: 'El pasajero abre la app y un agente conversacional pregunta fechas, presupuesto y preferencias. Analiza su historial, sugiere 3 opciones (estándar, premium, curada) con ancillaries pre-seleccionados y precio dinámico. Cierra la compra en 5 minutos sin salir del chat.',
          back: ['Copiloto de búsqueda: cruza CRM, historial y datos de mercado (competencia, clima, eventos).','Motor de precios agéntico: genera 3 opciones validadas contra inventario.','Recomendador de ancillaries: predice preferencias con un score de likelihood.','Ejecución integrada: PSS, inventario, CRM y pago orquestados en tiempo real.'],
          value: '+15% en conversión. +20% en valor promedio de ancillaries. Tiempo de compra -80%.' },
        { id:'compra', label:'Compra & Personalización', short:'Compra', phase:'En tierra',
          exp: 'Tras comprar, el pasajero recibe un SMS con el resumen y un enlace conversacional para personalizar: asiento, servicios especiales, lounge, wifi. Todo ocurre en el chat, sin fricción.',
          back: ['CDP integrada: golden record de cliente actualizado con cada interacción.','Agente de personalización: sugiere bundles dinámicos (NDC) y ejecuta cambios contra el PSS.','Sistema de órdenes inteligente: cada cambio es una orden auditada y reversible.','Retroalimentación autónoma: el agente aprende de aceptaciones y rechazos.'],
          value: '+25% en revenue post-compra. +35% en lifetime value. Contact center -40%.' },
        { id:'presalida', label:'Pre-salida', short:'Pre-salida', phase:'Rodaje',
          exp: '72 horas antes, el agente contacta proactivamente por WhatsApp: confirma check-in, sugiere servicios para el viaje e informa requisitos. Todo anticipado, cero estrés.',
          back: ['Planificador predictivo: analiza el patrón de viaje y predice necesidades.','Orquestador de servicios: coordina con partners (hotel, transfer, seguros).','Sistema de conformidad: valida documentos y alerta riesgos.','Agente de confirmación: cierra servicios y envía documentos por app.'],
          value: '+40% en ancillary uptake. No-show -30%. CSAT +25%.' },
        { id:'aeropuerto', label:'Aeropuerto & Embarque', short:'Aeropuerto', phase:'Despegue',
          exp: 'En el mostrador, el staff (asistido por IA) ve el perfil completo del pasajero: check-in ultra-rápido, equipaje etiquetado automáticamente, oferta de última hora si hay disponibilidad, boarding sin fricción.',
          back: ['Copiloto de mostrador: sugiere acciones al staff en tiempo real.','Gestión de capacidad: monitorea colas y anticipa cuellos de botella.','Agente de excepciones: detecta casos complejos y ofrece soluciones automáticas.','Boarding inteligente: optimiza el orden de embarque.'],
          value: 'On-time performance +8%. Throughput +10%. Costo operativo -25%.' },
        { id:'vuelo', label:'Durante el Vuelo', short:'Vuelo', phase:'Crucero',
          exp: 'La tripulación tiene el contexto completo del pasajero en sus tablets: bebida favorita, dieta, conexión ajustada. El entretenimiento se personaliza y el servicio se siente hecho a medida.',
          back: ['Asistente de tripulación: sugerencias en tiempo real desde la tablet.','Monitoreo de vuelo: predice demanda de servicio y turbulencias.','Copiloto de conexiones: prepara rebooking automático si hay riesgo de retraso.','Monetización dinámica: ofrece upgrades y servicios premium según contexto.'],
          value: 'NPS en vuelo +20%. Ancillary revenue en cabina +30%. Retención +25%.' },
        { id:'postvuelo', label:'Post-vuelo & Retención', short:'Post-vuelo', phase:'Aterrizaje',
          exp: 'A los 5 minutos de desembarcar, el pasajero recibe feedback conversacional. Si algo salió mal, el agente ofrece una solución al instante. Semanas después, recibe una recomendación de su próximo viaje.',
          back: ['Feedback agéntico: captura NPS y sentiment automáticamente, sin formularios.','Agente de recuperación: ofrece compensación automática ante experiencias negativas.','Motor de recomendación de viajes: predice el próximo viaje según patrón e historial.','Retención automatizada: reactiva clientes inactivos con ofertas personalizadas.'],
          value: 'NPS global +30. Churn -35%. Repeat booking +40%. CLV +50%.' },
      ];

      /* Coordenadas (% del viewBox 1200x260) de cada etapa sobre el perfil de vuelo */
      const journeyPos = [
        { x: 5.0,  y: 82.7 },
        { x: 23.0, y: 75.0 },
        { x: 41.0, y: 65.4 },
        { x: 59.0, y: 34.6 },
        { x: 77.0, y: 15.4 },
        { x: 95.0, y: 73.1 },
      ];
      /* Rotación del avión (grados) por etapa: nivelado en tierra, ascenso, crucero, descenso */
      const journeyRotation = [90, 88, 78, 42, 92, 128];

      const helps = [
        { name:'Agente conversacional de venta y atención',
          desc:'Un agente en web, app y WhatsApp que cotiza, reserva, cambia, hace check-in y vende ancillaries, con escalamiento fluido a un humano.',
          why:'Orquestación de agentes + integración con PSS: nuestro foco natural.' },
        { name:'Copiloto de pricing y ancillaries dinámico',
          desc:'Motor de recomendación de precios y bundles con aprobación humana, integrado a inventario y revenue management.',
          why:'Modelos de pricing + gobernanza de decisiones: expertise directa de Artefact.' },
        { name:'Plataforma de datos de cliente (CDP) + Next Best Offer',
          desc:'Unifica PNR, lealtad, comportamiento web y compras pasadas en un golden record para personalizar cada oferta.',
          why:'Ingeniería de datos y unificación de fuentes: uno de nuestros pilares.' },
        { name:'Agente B2B para agencias y contact center',
          desc:'Automatiza consultas de PNR, condiciones tarifarias, cambios involuntarios y servicios especiales para el canal indirecto.',
          why:'Integración de reglas de negocio complejas en un agente auditable.' },
        { name:'Agente de comunicación proactiva en disrupciones',
          desc:'Monitorea OCC/DCS, detecta el impacto en pasajeros y activa soluciones automáticas antes de que se genere el reclamo.',
          why:'Conectamos sistemas operativos y de cliente en un solo flujo de decisión.' },
        { name:'Copiloto de mantenimiento y documentación técnica',
          desc:'Acceso conversacional a manuales y bitácoras técnicas para acelerar el diagnóstico y reducir tiempo en tierra.',
          why:'Mayor complejidad regulatoria: lo abordamos con un piloto acotado y gobernado.' },
      ];

      const helpsFoundation = [
        { name:'Context Spine Ontológico',
          desc:'Ontología, capa semántica y grafo de contexto que conectan productos de datos, métricas y reglas ya existentes — sin reemplazar el Data Mesh, para que personas y agentes hablen el mismo idioma.',
          why:'Es la fundación que hace confiables a los agentes: sin ella, cada agente reconstruye el contexto desde cero.' },
        { name:'Auditoría Agéntica de BI',
          desc:'Agentes vía MCP que barren el inventario de tableros, detectan duplicidad de lógicas (Power BI, Looker) y consolidan una Single Source of Truth.',
          why:'Reduce el ecosistema analítico a una fracción, liberando presupuesto y horas de ingeniería hacia IA.' },
        { name:'PoV Agentic Data Ops',
          desc:'Piloto acotado de 10 a 14 semanas sobre 2 a 5 pipelines: documentación automatizada, linaje, análisis de impacto y validaciones de CI/CD con autonomía limitada y gobernada.',
          why:'Escalamos solo cuando la evidencia confirma mejoras medibles en tiempo, precisión y control.' },
        { name:'Auditoría Agéntica de ML Ops',
          desc:'Mapeo y refactorización de repositorios de machine learning: elimina deuda técnica, centraliza el feature engineering y deja el código trazable para MLOps.',
          why:'Menos modelos "caja negra", más reutilización y menor riesgo regulatorio.' },
      ];

      /* ---------------- RENDER: CADENA DE VALOR (flashcards) ---------------- */
      const chainRail = document.getElementById('chainRail');

      domains.forEach((d, i) => {
        const tile = document.createElement('div');
        tile.className = 'chain-tile';
        tile.tabIndex = 0;
        tile.setAttribute('role', 'button');
        tile.setAttribute('aria-label', `Voltear tarjeta ${d.name}`);
        tile.innerHTML = `
          <div class="tile-inner">
            <div class="tile-face tile-front">
              <img src="images/${d.img}" alt="">
              <div class="tile-front-tint"></div>
              <div class="chain-rank">${i+1}</div>
              <div class="chain-score">${d.score.toFixed(1)}<small>score</small></div>
              <div class="tile-front-name">${d.name}</div>
              <div class="tile-flip-hint">Toca para comparar ↻</div>
            </div>
            <div class="tile-face tile-back">
              <div>
                <div class="tile-back-rank">#${i+1}</div>
                <div class="tile-back-title">${d.name}</div>
                <p class="tile-back-read">${d.read}</p>
              </div>
              <div class="tile-back-scores">
                <div class="spotlight-score-card"><div class="num">${d.maturity.toFixed(1)}</div><div class="lbl">Madurez</div></div>
                <div class="spotlight-score-card"><div class="num">${d.viability.toFixed(1)}</div><div class="lbl">Viabilidad</div></div>
                <div class="spotlight-score-card"><div class="num">${d.impact.toFixed(1)}</div><div class="lbl">Impacto</div></div>
              </div>
            </div>
          </div>`;
        const flip = () => tile.classList.toggle('flipped');
        tile.addEventListener('click', flip);
        tile.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
        chainRail.appendChild(tile);
      });

      /* ---------------- RENDER: CADENA DE VALOR (ranking, escalera invertida) ---------------- */
      const chainRankingEl = document.getElementById('chainRanking');
      const rankedDomains = [...domains].sort((a, b) => b.score - a.score);

      rankedDomains.forEach((d, i) => {
        const row = document.createElement('div');
        row.className = 'rank-row';
        row.style.marginLeft = (i * 26) + 'px';
        row.style.width = `calc(100% - ${i * 26}px)`;
        row.innerHTML = `
          <div class="rank-row-left">
            <span class="rank-row-num">#${i + 1}</span>
            <div>
              <div class="rank-row-name">${d.name}</div>
              <p class="rank-row-desc">${d.read}</p>
            </div>
          </div>
          <div class="rank-row-score">
            <div class="num">${d.score.toFixed(1)}</div>
            <div class="lbl">Score</div>
          </div>`;
        chainRankingEl.appendChild(row);
      });

      root.querySelectorAll('.chain-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          root.querySelectorAll('.chain-toggle-btn').forEach(b => {
            b.classList.toggle('active', b === btn);
            b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
          });
          const view = btn.dataset.view;
          chainRail.style.display = view === 'cards' ? 'grid' : 'none';
          chainRankingEl.style.display = view === 'ranking' ? 'flex' : 'none';
        });
      });

      /* ---------------- RENDER: ÁREAS + PROCESOS ---------------- */
      const areaBlocksEl = document.getElementById('areaBlocks');
      const areaTabNavEl = document.getElementById('areaTabNav');

      areas.forEach((area, ai) => {
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.className = 'area-tab' + (ai === 0 ? ' active' : '');
        tab.dataset.index = ai;
        tab.innerHTML = `<span class="area-tab-num">${String(ai+1).padStart(2,'0')}</span><span class="area-tab-name">${area.title}</span>`;
        tab.addEventListener('click', () => setArea(ai));
        areaTabNavEl.appendChild(tab);

        const block = document.createElement('div');
        block.className = 'area-block' + (ai === 0 ? ' active' : '');
        block.dataset.index = ai;
        const processesHtml = area.processes.map(p => `
          <div class="process-card">
            <div class="process-card-head">
              <div>
                <div class="process-tag">Evolución de producto</div>
                <h4>${p.name}</h4>
                <p class="teaser">${p.teaser}</p>
              </div>
              <div class="process-toggle-ico">+</div>
            </div>
            <div class="process-detail">
              <div class="evo-path">
                ${p.stages.map((s,i) => `
                  <div class="evo-stage ${i===0?'as-is':(i===p.stages.length-1?'to-be':'t'+i)}">
                    <span class="evo-label">${s.l}</span>
                    <div class="evo-title">${s.t}</div>
                    <div class="evo-copy">${s.c}</div>
                  </div>`).join('')}
              </div>
              <div class="process-meta">
                <div class="process-meta-box"><h5>Problema inicial</h5><p>${p.problem}</p></div>
                <div class="process-meta-box"><h5>Éxito medible</h5><p>${p.value}</p></div>
              </div>
            </div>
          </div>`).join('');

        block.innerHTML = `
          <div class="area-head">
            <img src="images/${area.img}" alt="${area.title}">
            <div class="area-head-body">
              <span class="area-tag">${area.tag}</span>
              <h3>${area.title}</h3>
              <p>${area.desc}</p>
            </div>
          </div>
          <div class="process-grid">${processesHtml}</div>`;
        areaBlocksEl.appendChild(block);
      });

      function setArea(i) {
        root.querySelectorAll('.area-tab').forEach(t => t.classList.toggle('active', Number(t.dataset.index) === i));
        root.querySelectorAll('.area-block').forEach(b => b.classList.toggle('active', Number(b.dataset.index) === i));
      }

      root.querySelectorAll('.process-card').forEach(card => {
        card.querySelector('.process-card-head').addEventListener('click', () => {
          card.classList.toggle('open');
        });
      });

      /* ---------------- RENDER: VISIÓN AGÉNTICA ---------------- */
      const flightNodes = document.getElementById('flightNodes');
      const visionPanels = document.getElementById('visionPanels');
      const flightPlane = document.getElementById('flightPlane');
      const flightProgressPath = document.getElementById('flightProgressPath');
      const flightStageBadge = document.getElementById('flightStageBadge');

      journey.forEach((stage, i) => {
        const pos = journeyPos[i];
        const node = document.createElement('button');
        node.type = 'button';
        node.className = 'flight-node' + (i === 0 ? ' active' : '');
        node.dataset.index = i;
        node.style.left = pos.x + '%';
        node.style.top = pos.y + '%';
        node.innerHTML = `<span class="dot">${i+1}</span><span class="lbl">${stage.short}</span>`;
        node.addEventListener('click', () => setStage(i));
        flightNodes.appendChild(node);

        const panel = document.createElement('div');
        panel.className = 'vision-panel' + (i === 0 ? ' active' : '');
        panel.dataset.index = i;
        panel.innerHTML = `
          <div class="vp-card">
            <div class="vp-head"><div class="vp-ico">01</div><h4>Experiencia del pasajero</h4></div>
            <p>${stage.exp}</p>
          </div>
          <div class="vp-card">
            <div class="vp-head"><div class="vp-ico">02</div><h4>Cadena de valor agéntica</h4></div>
            <ul>${stage.back.map(b => `<li>${b}</li>`).join('')}</ul>
            <div class="vp-value"><strong>Impacto de valor</strong>${stage.value}</div>
          </div>`;
        visionPanels.appendChild(panel);
      });

      function positionPlane(i) {
        const pos = journeyPos[i];
        flightPlane.style.left = pos.x + '%';
        flightPlane.style.top = pos.y + '%';
        flightPlane.style.transform = `translate(-50%,-50%) rotate(${journeyRotation[i]}deg)`;
        const pct = journey.length === 1 ? 100 : (i / (journey.length - 1)) * 100;
        flightProgressPath.style.strokeDashoffset = String(100 - pct);
      }

      function renderBadge(i) {
        const stage = journey[i];
        flightStageBadge.innerHTML = `
          <span class="flight-stage-count">${String(i+1).padStart(2,'0')}<b> / ${String(journey.length).padStart(2,'0')}</b></span>
          <span class="flight-stage-name">${stage.label}</span>
          <span class="flight-stage-phase">${stage.phase}</span>`;
        retranslate();
      }

      function setStage(i) {
        root.querySelectorAll('.flight-node').forEach(n => n.classList.toggle('active', Number(n.dataset.index) === i));
        root.querySelectorAll('.vision-panel').forEach(p => p.classList.toggle('active', Number(p.dataset.index) === i));
        positionPlane(i);
        renderBadge(i);
      }
      positionPlane(0);
      renderBadge(0);

      /* ---------------- RENDER: CÓMO AYUDAMOS (toggle Aplicaciones / Foundation) ---------------- */
      const helpGrid = document.getElementById('helpGrid');
      const helpSets = { apps: helps, foundation: helpsFoundation };

      function renderHelps(setName) {
        helpGrid.innerHTML = '';
        helpSets[setName].forEach((h, i) => {
          const card = document.createElement('div');
          card.className = 'help-card';
          card.innerHTML = `
            <div class="help-ico">${String(i + 1).padStart(2, '0')}</div>
            <h4>${h.name}</h4>
            <p class="help-desc">${h.desc}</p>
            <div class="help-artefact"><strong>Por qué Artefact:</strong> ${h.why}</div>`;
          helpGrid.appendChild(card);
        });
        retranslate();
      }
      renderHelps('apps');

      root.querySelectorAll('.help-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          root.querySelectorAll('.help-toggle-btn').forEach(b => {
            b.classList.toggle('active', b === btn);
            b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
          });
          renderHelps(btn.dataset.set);
        });
      });

      /* ---------------- MODAL VISIÓN ---------------- */
      const visionModalOverlay = document.getElementById('visionModalOverlay');
      const visionModalBtn = document.getElementById('visionModalBtn');
      const visionModalClose = document.getElementById('visionModalClose');

      function openVisionModal() {
        visionModalOverlay.classList.add('open');
        document.body.classList.add('modal-open');
      }
      function closeVisionModal() {
        visionModalOverlay.classList.remove('open');
        document.body.classList.remove('modal-open');
      }
      visionModalBtn.addEventListener('click', openVisionModal);
      visionModalClose.addEventListener('click', closeVisionModal);
      visionModalOverlay.addEventListener('click', (e) => { if (e.target === visionModalOverlay) closeVisionModal(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeVisionModal(); });

      /* ---------------- REVEAL ON SCROLL ---------------- */
      const revealEls = root.querySelectorAll('.reveal');
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
        }, { threshold: 0.12 });
        revealEls.forEach(el => obs.observe(el));
      } else {
        revealEls.forEach(el => el.classList.add('in'));
      }

      /* ---------------- NAVEGACIÓN A LA SECCIÓN ---------------- */
      const HEADER_OFFSET = 86;
      function smoothScrollTo(el) {
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }

      const scrollCue = root.querySelector('.scroll-cue');
      if (scrollCue) {
        scrollCue.addEventListener('click', (e) => {
          e.preventDefault();
          smoothScrollTo(document.getElementById('cadena'));
        });
      }

      /* Traduce todo lo renderizado arriba si la página ya estaba en inglés */
      retranslate();
    })();
