import { useEffect, useState } from "react";

const ASSET = "/assets/";

const productScreens = [
  {
    label: "AI Copilot",
    title: "학생 기록과 외부 근거를 함께 분석합니다",
    description: "ONTELIK이 상담 기록·Notion·외부 검색을 연결하고, 분석 과정과 근거를 MCP 콘솔에서 투명하게 보여줍니다.",
    src: `${ASSET}ai-copilot-current.png`,
  },
  {
    label: "Report Studio",
    title: "수업 메모를 학부모 리포트로 완성합니다",
    description: "학생 선택부터 수업 메모, AI 추천, 리포트 생성과 이메일·카카오톡 발송까지 한 화면에서 처리합니다.",
    src: `${ASSET}report-studio-current.png`,
  },
  {
    label: "Admission AI",
    title: "입시 데이터를 전략으로 연결합니다",
    description: "공식 자료와 학생 기록을 함께 분석해 근거와 다음 행동이 있는 리포트를 만듭니다.",
    src: `${ASSET}05_admission_analysis_dashboard.png`,
  },
  {
    label: "Tutor Lab",
    title: "진단 이후의 학습까지 실행합니다",
    description: "약점 진단, 문제 구성, 주간 학습지와 다음 수업 설계를 하나의 흐름으로 잇습니다.",
    src: `${ASSET}11_tutor_lab_weekly_sheet.png`,
  },
];

const processSteps = [
  ["01", "문제 정의", "현장의 업무와 해결할 문제를 정확히 확인합니다."],
  ["02", "서비스 기획", "사용자 흐름과 핵심 기능, 검증 기준을 설계합니다."],
  ["03", "AI 시스템 구축", "데이터·추론·화면·자동화를 하나로 연결합니다."],
  ["04", "테스트와 개선", "실제 사용 환경에서 오류와 사용성을 검증합니다."],
  ["05", "배포와 운영", "안정화와 유지보수까지 지속적으로 함께합니다."],
];

const jarvisWorkflow = [
  ["01", "REQUEST", "사용자 요청"],
  ["02", "PLAN", "실행 계획"],
  ["03", "SELECT TOOL", "도구 선택"],
  ["04", "ACT", "실제 실행"],
  ["05", "VERIFY", "결과 확인"],
  ["06", "REPORT", "근거와 결과"],
];

const jarvisCapabilities = [
  ["AUTONOMOUS AGENT", "멀티스텝 실행", "요청을 계획 단위로 나누고 필요한 도구를 선택해 작업을 이어갑니다."],
  ["REAL BROWSER", "브라우저 에이전트", "실제 Chrome에서 검색·탐색·본문 확인·입력과 결과 검증을 수행합니다."],
  ["MCP BRIDGE", "AI 클라이언트 연결", "Claude Desktop·Cursor에서도 동일한 ONTELIK 도구와 안전 정책을 사용합니다."],
  ["WORK CONTEXT", "업무와 문서 연결", "Google Workspace와 PDF·DOCX·XLSX·PPTX 등 실제 업무 자료를 연결합니다."],
  ["LOCAL MULTIMODAL", "로컬 음성·비전", "로컬 AI를 기반으로 음성 인터랙션과 필요할 때만 사용하는 카메라 비전을 지원합니다."],
  ["GOVERNED ACTION", "통제 가능한 실행", "위험도·화면 승인·감사 기록·체크포인트와 되돌리기로 실행을 통제합니다."],
];

const jarvisPrinciples = [
  ["01", "진짜 브라우저에서 움직입니다", "검색 결과만 요약하지 않습니다. 실제 사이트에 들어가 목록과 본문을 읽고, 실행 결과까지 확인합니다."],
  ["02", "자율성과 통제를 함께 설계했습니다", "안전한 작업은 스스로 진행하고 외부 상태를 바꾸는 작업은 사람이 내용을 확인한 뒤 승인합니다."],
  ["03", "막혀도 작업을 잃지 않습니다", "로그인·보안 확인·작업 한도에서 현재 지점을 저장하고, 사람이 필요한 단계를 처리하면 이어서 진행합니다."],
];

function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="ROBOMETAFIT 홈" onClick={closeMenu}>
          <span className="brand-mark-shell">
            <img src={`${ASSET}robometafit-logo-transparent-v2.png`} alt="" />
          </span>
          <span>ROBOMETAFIT</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">메뉴 열기</span>
        </button>

        <nav id="site-navigation" className={menuOpen ? "nav is-open" : "nav"} aria-label="주요 메뉴">
          <a href="#vision" onClick={closeMenu}>비전</a>
          <a href="#robometafit" onClick={closeMenu}>RoboMetaFit</a>
          <a href="#alture" onClick={closeMenu}>Alture</a>
          <a href="#custom-ai" onClick={closeMenu}>AI 구축</a>
          <a href="#team" onClick={closeMenu}>팀과 성과</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>문의하기</a>
        </nav>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div className="hero-ambient hero-ambient-a" />
          <div className="hero-ambient hero-ambient-b" />
          <div className="hero-grid" />

          <div className="hero-copy">
            <p className="eyebrow"><span /> AI · DATA · AUTOMATION</p>
            <h1>
              현장의 복잡한 문제를
              <br />
              실제 작동하는 <em>AI 시스템</em>으로
              <br />
              바꿉니다.
            </h1>
            <p className="hero-description">
              교육 AI SaaS부터 자율 드론 운영 시스템, 맞춤형 AI 서비스까지.
              데이터 설계·AI 판단·사용자 화면·배포와 운영을 하나의 팀이 직접 구축합니다.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#robometafit">RoboMetaFit 보기 <span>↗</span></a>
              <a className="button button-secondary" href="#alture">Alture 기술 보기</a>
              <a className="text-link" href="#contact">AI 구축 상담 <span>→</span></a>
            </div>
          </div>

          <div className="hero-stage" aria-label="RoboMetaFit과 Alture 실제 제품 화면">
            <div className="hero-window hero-window-light">
              <div className="window-bar">
                <span className="window-dots"><i /><i /><i /></span>
                <span>RoboMetaFit Education AI</span>
                <b>LIVE</b>
              </div>
              <img
                src={`${ASSET}ai-copilot-current.png`}
                alt="RoboMetaFit AI Copilot 실제 콘솔 화면"
              />
            </div>
            <div className="hero-window hero-window-dark">
              <div className="window-bar">
                <span className="window-dots"><i /><i /><i /></span>
                <span>Alture COVA GCS</span>
                <b>R&amp;D</b>
              </div>
              <img
                src={`${ASSET}alture-cova-gcs.png`}
                alt="Alture COVA 지상관제 시스템 실제 화면"
              />
            </div>
            <div className="hero-orbit" aria-hidden="true">
              <span>AI</span>
            </div>
            <div className="hero-flow" aria-hidden="true">
              <span>DATA</span><i /><span>REASON</span><i /><span>ACT</span>
            </div>
          </div>

          <div className="hero-proof" data-reveal>
            <div><strong>80만+</strong><span>교육·입시 데이터 레코드</span></div>
            <div><strong>3</strong><span>주요 창업·육성사업 선정</span></div>
            <div><strong>2</strong><span>현장형 AI 사업 축</span></div>
            <div><strong>End-to-end</strong><span>기획부터 배포·운영까지</span></div>
          </div>
        </section>

        <section id="vision" className="section company-structure">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">ONE TEAM · DIFFERENT FIELDS</p>
            <h2>하나의 기술팀이<br />서로 다른 현장의 문제를 해결합니다.</h2>
            <p>산업은 달라도, 데이터를 판단과 실행으로 연결하는 기술 철학은 같습니다.</p>
          </div>

          <div className="business-grid">
            <article className="business-card card-education" data-reveal>
              <div className="business-index">01</div>
              <div className="business-icon"><span>R</span></div>
              <p>EDUCATION AI</p>
              <h3>RoboMetaFit</h3>
              <strong>학원 성장관리 AI SaaS</strong>
              <ul>
                <li>AI 코파일럿과 업무 자동화</li>
                <li>리포트·입시·문제은행·튜터랩</li>
                <li>ONTELIK 자체 추론엔진</li>
              </ul>
              <a href="#robometafit">제품 기술 보기 <span>→</span></a>
            </article>

            <article className="business-card card-alture" data-reveal>
              <div className="business-index">02</div>
              <div className="business-icon"><span>A</span></div>
              <p>AUTONOMOUS SYSTEMS</p>
              <h3>Alture</h3>
              <strong>농업용 자율 드론 운영 시스템</strong>
              <ul>
                <li>COVA 지상관제 시스템</li>
                <li>온보드 AI·비전 안전</li>
                <li>경로 최적화·안전 복귀</li>
              </ul>
              <a href="#alture">자율 시스템 보기 <span>→</span></a>
            </article>

            <article className="business-card card-custom" data-reveal>
              <div className="business-index">03</div>
              <div className="business-icon"><span>C</span></div>
              <p>CUSTOM AI DEVELOPMENT</p>
              <h3>Custom AI</h3>
              <strong>업무에 맞춘 AI 서비스 구축</strong>
              <ul>
                <li>AI 비서와 내부 자료 검색</li>
                <li>업무 자동화·맞춤형 SaaS</li>
                <li>데이터 대시보드·운영 지원</li>
              </ul>
              <a href="#custom-ai">구축 방식 보기 <span>→</span></a>
            </article>
          </div>
        </section>

        <section className="thinking-section">
          <div className="thinking-shell">
            <div className="thinking-copy" data-reveal>
              <p className="section-kicker section-kicker-light">THE ROBOMETAFIT LOOP</p>
              <h2>데이터를 모으는 데서 끝내지 않고,<br /><em>판단과 실행</em>까지 연결합니다.</h2>
              <p>
                High Thinking은 현장의 맥락을 구조화하고, 근거를 확인하고,
                다음 행동을 실행 가능한 결과로 완성하는 로보메타핏의 사고 방식입니다.
              </p>
              <div className="thinking-note">
                <span>범용 AI</span>
                <p>질문 → 검색 → 답변</p>
                <i>VS</i>
                <span className="note-active">RoboMetaFit</span>
                <p>기록 → 근거 → 판단 → 실행 → 축적</p>
              </div>
            </div>

            <div className="thinking-flow" data-reveal>
              {[
                ["01", "FIELD DATA", "현장 데이터"],
                ["02", "CONTEXT", "맥락 이해"],
                ["03", "EVIDENCE", "근거 검색"],
                ["04", "REASON", "판단"],
                ["05", "ACTION", "실행"],
                ["06", "MEMORY", "결과 재축적"],
              ].map(([number, label, title]) => (
                <div className="flow-step" key={number}>
                  <span>{number}</span>
                  <small>{label}</small>
                  <strong>{title}</strong>
                </div>
              ))}
              <div className="flow-line" />
            </div>
          </div>
        </section>

        <section id="robometafit" className="section product-section">
          <div className="product-intro" data-reveal>
            <div>
              <p className="section-kicker">ROBO METAFIT · EDUCATION AI</p>
              <h2>흩어진 기록을<br />학생 성장의 근거로 연결합니다.</h2>
            </div>
            <div>
              <p>
                학생의 수업·상담·성적·오답·입시 데이터를 코파일럿이 이해하고,
                리포트와 맞춤 문제, 입시 전략, 다음 수업까지 연결하는 학원 성장관리 AI 플랫폼입니다.
              </p>
              <a className="button button-dark" href="https://robometafit.com/" target="_blank" rel="noreferrer">
                제품 홈페이지 <span>↗</span>
              </a>
            </div>
          </div>

          <div className="product-gallery" data-reveal>
            <div className="gallery-tabs" role="tablist" aria-label="RoboMetaFit 주요 화면">
              {productScreens.map((screen, index) => (
                <button
                  key={screen.label}
                  type="button"
                  role="tab"
                  aria-selected={activeScreen === index}
                  className={activeScreen === index ? "is-active" : ""}
                  onClick={() => setActiveScreen(index)}
                >
                  <span>0{index + 1}</span>
                  <strong>{screen.label}</strong>
                  <small>{screen.title}</small>
                </button>
              ))}
            </div>
            <div className="gallery-stage" role="tabpanel">
              <div className="gallery-window-bar">
                <span className="window-dots"><i /><i /><i /></span>
                <span>console.robometafit.com</span>
                <b>ACTUAL PRODUCT</b>
              </div>
              <img
                key={productScreens[activeScreen].src}
                src={productScreens[activeScreen].src}
                alt={`${productScreens[activeScreen].title} 실제 제품 화면`}
              />
              <div className="gallery-caption">
                <strong>{productScreens[activeScreen].title}</strong>
                <span>{productScreens[activeScreen].description}</span>
              </div>
            </div>
          </div>

          <div className="output-grid">
            {[
              ["REPORT", "학부모 성장 리포트", "06_parent_report_email.png"],
              ["ADMISSION", "근거 기반 입시 리포트", "07_admission_report_pdf.png"],
              ["LEARNING", "맞춤 시험지와 학습지", "10_custom_test_sheet.png"],
            ].map(([label, title, image]) => (
              <article className="output-card" key={label} data-reveal>
                <div><span>{label}</span><h3>{title}</h3></div>
                <img src={`${ASSET}${image}`} alt={`${title} 실제 산출물`} loading="lazy" />
              </article>
            ))}
          </div>
        </section>

        <section id="alture" className="alture-section">
          <div className="alture-content">
            <div className="alture-copy" data-reveal>
              <p className="section-kicker section-kicker-light">ALTURE · AUTONOMOUS SYSTEMS</p>
              <div className="status-pill"><span /> R&amp;D · PROTOTYPE</div>
              <h2>드론을 조종하는 도구를 넘어,<br />농업 임무를 수행하는 <em>운영체제</em>를 만듭니다.</h2>
              <p>
                Alture는 지상관제, 온보드 AI, 비행제어, 비전 안전과 경로 최적화를
                하나의 흐름으로 연결하는 농업용 자율 드론 운영 시스템입니다.
              </p>
              <blockquote>
                “고령화와 인력 부족이 심화되는 농업 현장에서,
                누구나 안전하게 사용할 수 있는 자율 작업 시스템을 구축합니다.”
              </blockquote>
            </div>

            <div className="alture-visual" data-reveal>
              <div className="alture-window">
                <div className="window-bar">
                  <span className="window-dots"><i /><i /><i /></span>
                  <span>Alture COVA — PRO v5</span>
                  <b>BRIEF: READY</b>
                </div>
                <img src={`${ASSET}alture-cova-gcs.png`} alt="Alture COVA 지상관제 실제 화면" loading="lazy" />
              </div>
              <div className="alture-specs">
                {[
                  ["COVA", "지상관제"], ["JETSON", "온보드 AI"], ["PIXHAWK", "비행제어"],
                  ["OAK-D", "비전 안전"], ["MAVLINK", "텔레메트리"], ["RTH", "안전 복귀"],
                ].map(([code, label]) => <span key={code}><b>{code}</b>{label}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="custom-ai" className="section custom-section">
          <div className="section-heading custom-heading" data-reveal>
            <p className="section-kicker">CUSTOM AI DEVELOPMENT</p>
            <h2>단순한 챗봇이 아니라,<br />고객의 업무에 연결되는 AI를 만듭니다.</h2>
            <p>아이디어만 있는 단계부터 기존 업무의 자동화까지, 실제 운영 가능한 서비스로 연결합니다.</p>
          </div>

          <div className="custom-grid">
            {[
              ["01", "나만의 AI 비서", "내부 자료 검색, 문서 작성, 상담 정리와 고객 응대를 하나의 업무 환경에 연결합니다.", ["자료 검색", "AI 비서", "업무 실행"]],
              ["02", "맞춤형 웹서비스·SaaS", "고객관리, 예약, 분석, 리포트 등 업종과 사용자 흐름에 맞는 서비스를 구축합니다.", ["서비스 기획", "UI/UX", "안정적 운영"]],
              ["03", "업무 자동화", "반복 입력, 자료 분류, 보고서 작성, 알림과 후속 처리를 자동화합니다.", ["반복 업무", "자동 처리", "결과 확인"]],
              ["04", "데이터 대시보드", "흩어진 데이터를 연결해 현재 상태와 다음 행동을 한눈에 보여줍니다.", ["데이터 연결", "지표 분석", "다음 행동"]],
            ].map(([number, title, description, steps]) => (
              <article className="custom-card" key={number as string} data-reveal>
                <span className="custom-number">{number as string}</span>
                <h3>{title as string}</h3>
                <p>{description as string}</p>
                <div className="mini-flow">
                  {(steps as string[]).map((step, index) => (
                    <span key={step}>{step}{index < 2 && <i>→</i>}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="jarvis-section" aria-labelledby="jarvis-title">
          <div className="jarvis-shell">
            <div className="jarvis-intro" data-reveal>
              <div>
                <p className="section-kicker section-kicker-light">ONTELIK · GOVERNED AI AGENT</p>
                <div className="jarvis-status"><span /> BUILT IN-HOUSE · OPERATIONAL</div>
                <h2 id="jarvis-title">
                  AI가 답하는 순간을 넘어,<br />
                  실제 업무가 <em>끝나는 지점</em>까지.
                </h2>
              </div>
              <div className="jarvis-intro-copy">
                <p>
                  ONTELIK은 사용자의 목표를 이해하고 필요한 도구를 선택해 실제 Chrome·업무 서비스·
                  로컬 자료를 확인하고 실행합니다. 중요한 작업은 사람이 통제하고, 실행 결과는 다시 검증합니다.
                </p>
                <div className="jarvis-tags" aria-label="ONTELIK 핵심 기술">
                  {["REAL CHROME", "MCP BRIDGE", "LOCAL FIRST", "HUMAN APPROVAL", "AUDIT & UNDO"].map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="jarvis-product-stage" data-reveal>
              <figure className="jarvis-shot jarvis-shot-main">
                <div className="jarvis-window-bar">
                  <span className="window-dots"><i /><i /><i /></span>
                  <span>ONTELIK · PRIVATE INTELLIGENCE</span>
                  <b>LIVE AGENT</b>
                </div>
                <img src={`${ASSET}ontelik-agent-result.png`} alt="ONTELIK이 브라우저 조사 결과를 표와 추천으로 정리한 실제 화면" loading="lazy" />
              </figure>

              <figure className="jarvis-shot jarvis-shot-browser">
                <span className="jarvis-shot-label">REAL BROWSER EXECUTION</span>
                <img src={`${ASSET}ontelik-browser-agent.png`} alt="ONTELIK Browser Agent가 실제 Chrome에서 사이트를 탐색한 화면" loading="lazy" />
              </figure>

              <figure className="jarvis-shot jarvis-shot-approval">
                <span className="jarvis-shot-label">HUMAN APPROVAL GATE</span>
                <img src={`${ASSET}ontelik-human-approval.png`} alt="중요한 외부 작업 전 ONTELIK이 사용자 승인을 요청하는 실제 화면" loading="lazy" />
              </figure>

              <div className="jarvis-stage-note">
                <span>ACTUAL PRODUCT</span>
                <p>실제 ONTELIK 워크스페이스와 전용 Chrome, 승인 화면을 사용했습니다.</p>
              </div>
            </div>

            <div className="jarvis-architecture" data-reveal>
              <div className="jarvis-architecture-heading">
                <div>
                  <p className="section-kicker section-kicker-light">HOW IT WORKS</p>
                  <h3>요청부터 검증까지,<br />하나의 실행 루프로 연결합니다.</h3>
                </div>
                <p>ONTELIK UI·Voice·Claude Desktop·Cursor가 하나의 런타임과 동일한 안전 규칙을 공유합니다.</p>
              </div>

              <div className="jarvis-entry-points" aria-label="ONTELIK 요청 채널">
                <span>ONTELIK UI</span><i>+</i><span>VOICE</span><i>+</i><span>CLAUDE / CURSOR VIA MCP</span>
              </div>

              <div className="jarvis-flow" aria-label="ONTELIK 작업 흐름">
                {jarvisWorkflow.map(([number, code, label], index) => (
                  <div className="jarvis-flow-step" key={code}>
                    <small>{number}</small>
                    <strong>{code}</strong>
                    <span>{label}</span>
                    {index < jarvisWorkflow.length - 1 && <i aria-hidden="true">→</i>}
                  </div>
                ))}
              </div>

              <div className="jarvis-safety-rail">
                <div>
                  <span>HUMAN GATE</span>
                  <strong>중요한 실행은 화면 승인 후 진행</strong>
                  <p>로그인·비밀번호·보안 확인이 필요하면 사람에게 넘기고, 통과한 지점부터 다시 이어갑니다.</p>
                </div>
                <div className="jarvis-foundation">
                  {["MEMORY", "CHECKPOINT", "AUDIT", "UNDO"].map((item) => <b key={item}>{item}</b>)}
                </div>
              </div>
            </div>

            <div className="jarvis-capability-block">
              <div className="jarvis-block-heading" data-reveal>
                <p className="section-kicker section-kicker-light">IMPLEMENTED CAPABILITIES</p>
                <h3>데모가 아니라, 실제 운영을 위해 구현했습니다.</h3>
                <p>브라우저 실행부터 업무 도구, 로컬 AI와 안전 제어까지 하나의 시스템 안에서 작동합니다.</p>
              </div>
              <div className="jarvis-capabilities">
                {jarvisCapabilities.map(([label, title, description], index) => (
                  <article key={label} data-reveal>
                    <span>{String(index + 1).padStart(2, "0")} · {label}</span>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="jarvis-principle-block">
              <div className="jarvis-block-heading" data-reveal>
                <p className="section-kicker section-kicker-light">DESIGN PRINCIPLES</p>
                <h3>기능보다 중요한 것은<br />어떻게 믿고 맡길 수 있는가입니다.</h3>
              </div>
              <div className="jarvis-principles">
                {jarvisPrinciples.map(([number, title, description]) => (
                  <article key={number} data-reveal>
                    <span>{number}</span>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="jarvis-application" data-reveal>
              <div>
                <p className="section-kicker section-kicker-light">FROM ONTELIK TO YOUR WORK</p>
                <h3>이 기술을 고객의 업무에 맞게 확장합니다.</h3>
              </div>
              <ul>
                <li>사내 문서와 웹을 함께 조사하는 AI 비서</li>
                <li>공고·시장·채용·가격 정보를 확인하는 Agent</li>
                <li>메일·일정·보고서를 준비하고 승인 후 처리하는 시스템</li>
                <li>여러 웹서비스의 반복 업무를 수행하는 맞춤형 AI</li>
              </ul>
              <a href="#contact">우리 업무에도 적용할 수 있는지 상담하기 <span>→</span></a>
            </div>
          </div>
        </section>

        <section id="team" className="section team-section">
          <div className="team-heading" data-reveal>
            <p className="section-kicker">CORE TEAM</p>
            <h2>기술과 운영을 함께 이해하는<br />핵심 팀이 직접 만듭니다.</h2>
            <p>제품 개발부터 사업 운영과 고객 경험까지, 기획하고 실행합니다.</p>
          </div>

          <div className="team-grid">
            <article className="team-card" data-reveal>
              <div className="team-photo"><img src={`${ASSET}12_kim_dongju_original.jpg`} alt="김동주 Founder & CTO" loading="lazy" /></div>
              <div className="team-info">
                <span>FOUNDER &amp; CTO</span>
                <h3>김동주</h3>
                <strong>기술 및 제품 총괄</strong>
                <ul>
                  <li>RoboMetaFit AI SaaS 아키텍처 및 제품 개발</li>
                  <li>ONTELIK 자체 AI 추론엔진 설계·운영</li>
                  <li>교육 데이터·코파일럿·문제은행·입시분석 구축</li>
                  <li>Alture 자율 드론 운영 시스템 기술 총괄</li>
                  <li>컴퓨터공학·의공학 전공</li>
                </ul>
              </div>
            </article>

            <article className="team-card" data-reveal>
              <div className="team-photo"><img src={`${ASSET}13_sim_bohyeon_original.jpg`} alt="심보현 COO" loading="lazy" /></div>
              <div className="team-info">
                <span>COO</span>
                <h3>심보현</h3>
                <strong>경영·운영·마케팅 총괄</strong>
                <ul>
                  <li>사업기획 및 정부지원사업 운영</li>
                  <li>재무·행정·사업비 관리</li>
                  <li>고객 온보딩과 서비스 운영</li>
                  <li>마케팅 콘텐츠·브랜드·대외 협력</li>
                  <li>경영학 전공</li>
                </ul>
              </div>
            </article>
          </div>

          <div className="achievement-block" data-reveal>
            <div className="achievement-copy">
              <p className="section-kicker">MILESTONES</p>
              <h3>주요 선정 및 성과</h3>
              <p>아이디어를 실제 제품으로 만들고, 현장에서 운영하며 증명하고 있습니다.</p>
            </div>
            <div className="achievement-list">
              <a href={`${ASSET}14_modu_startup_certificate.pdf`} target="_blank" rel="noreferrer">
                <span>01</span><strong>모두의창업 1기 선정</strong><small>공식 증빙 보기 ↗</small>
              </a>
              <div><span>02</span><strong>전남형 청년창업사관학교 1기</strong><small>창업가 육성 지원사업 선정</small></div>
              <div><span>03</span><strong>전남형 청년창업사관학교 2기</strong><small>창업가 육성 지원사업 선정</small></div>
              <div><span>04</span><strong>AI SaaS 직접 개발·운영</strong><small>RoboMetaFit 서비스 운영 중</small></div>
            </div>
          </div>

          <div className="patent-block" data-reveal>
            <div className="patent-heading">
              <div>
                <p className="section-kicker">INTELLECTUAL PROPERTY</p>
                <h3>현장 기술을 지식재산으로 축적합니다.</h3>
              </div>
              <div className="patent-count"><strong>03</strong><span>PATENT<br />APPLICATIONS</span></div>
            </div>
            <div className="patent-list">
              <article>
                <span>ALTURE · FLIGHT CONTROL</span>
                <strong>풍속 기반 드리프트 보정과 경로·살포량 동시 제어</strong>
                <div><small>출원번호</small><b>10-2026-0029010</b></div>
                <p>2026. 02. 13 출원</p>
              </article>
              <article>
                <span>ALTURE · MOBILE STATION</span>
                <strong>차량 탑재형 도킹·충전·세척·리필 통합 방제 운영</strong>
                <div><small>출원번호</small><b>10-2026-0029011</b></div>
                <p>2026. 02. 13 출원</p>
              </article>
              <article>
                <span>ALTURE · PRECISION SPRAY</span>
                <strong>픽셀-실거리 변환과 기체 위치 보정 기반 정밀 선택 살포</strong>
                <div><small>출원번호</small><b>10-2026-0029015</b></div>
                <p>2026. 02. 13 출원</p>
              </article>
            </div>
            <p className="patent-note">특허청 출원사실증명원 기준 · 출원 완료 단계이며 등록 특허가 아닙니다. 개인정보가 포함된 증명서 원본은 웹에 공개하지 않습니다.</p>
          </div>
        </section>

        <section className="process-section">
          <div className="section process-inner">
            <div className="section-heading process-heading" data-reveal>
              <p className="section-kicker section-kicker-light">HOW WE BUILD</p>
              <h2>아이디어를 실제 운영 가능한<br />AI 서비스로 연결합니다.</h2>
              <p>문제 정의부터 안정화와 유지보수까지 함께합니다.</p>
            </div>
            <div className="process-list">
              {processSteps.map(([number, title, description]) => (
                <article key={number} data-reveal>
                  <span>{number}</span><h3>{title}</h3><p>{description}</p><i>↗</i>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-ambient" />
          <div className="contact-inner">
            <div className="contact-copy" data-reveal>
              <p className="section-kicker section-kicker-light">LET&apos;S BUILD WHAT&apos;S NEXT</p>
              <h2>만들고 싶은 서비스나<br />반복되는 업무 문제가 있다면.</h2>
              <p>로보메타핏과 함께 실제 사용할 수 있는 AI 시스템으로 만들어보세요.</p>
              <div className="contact-topics">
                <span>맞춤형 AI 구축</span><span>RoboMetaFit 도입</span><span>Alture 기술 협력</span><span>기관·사업 제휴</span>
              </div>
            </div>
            <div className="contact-card" data-reveal>
              <p>PROJECT INQUIRY</p>
              <a className="contact-primary" href="tel:01047934053"><small>협업 전화</small><strong>010-4793-4053</strong><span>↗</span></a>
              <a href="mailto:robometafit@gmail.com"><small>이메일</small><strong>robometafit@gmail.com</strong><span>↗</span></a>
              <a href="https://robometafit.com/" target="_blank" rel="noreferrer"><small>제품 홈페이지</small><strong>robometafit.com</strong><span>↗</span></a>
              <div className="contact-address">
                <small>법적 사업장</small>
                <strong>전남광주통합특별시 여수시 미평동 345-13<br />106동 302호</strong>
              </div>
              <p className="contact-scope">여수·순천·광양 대면 협업 · 전국 비대면 프로젝트</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark-shell"><img src={`${ASSET}robometafit-logo-transparent-v2.png`} alt="" /></span>
          <span>ROBOMETAFIT</span>
        </a>
        <p>AI · DATA · AUTOMATION</p>
        <div><a href="https://robometafit.com/">제품 홈페이지</a><a href="#contact">문의 및 협업</a></div>
        <small>© 2026 ROBOMETAFIT. All rights reserved.</small>
      </footer>
    </>
  );
}

export default App;
