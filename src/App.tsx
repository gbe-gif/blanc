/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, User, Scroll, Heart, Image as ImageIcon } from 'lucide-react';

// --- Types ---
enum Page {
  WORLDVIEW = 'worldview',
  PROFILE = 'profile',
  SECRETS = 'secrets',
  INTERACTION = 'interaction',
  GALLERY = 'gallery',
}

// --- Components ---

const WorldviewPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="space-y-8 pb-32"
  >
    <section>
      <h2 className="text-2xl text-antique-point-blue mb-4 border-l-4 border-antique-point-red pl-3 animate-pulse">◆ 블란테스 제국 (The Blantes Empire)</h2>
      <p className="leading-relaxed mb-6">
        강철과 화약, 그리고 증기기관이 지배하는 광활한 대륙의 유일무이한 패권국.
      </p>
      
      <div className="bg-white/5 p-5 rounded border border-antique-border shadow-inner">
        <ul className="space-y-4">
          <li>
            <strong className="text-antique-point-blue block mb-1">시대적 배경</strong>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>검과 마법의 시대는 수백 년 전 반란 진압과 함께 전설 속으로 사라짐</li>
              <li>정령, 오러, 마법 일족은 철저히 멸족된 로우 판타지 세계</li>
              <li>암암리에 뒷골목에서 유행하는 사술을 쫓는 '이단 검문관'들의 서늘한 감시망</li>
            </ul>
          </li>
          <li>
            <strong className="text-antique-point-blue block mb-1">지리 및 기후</strong>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>제국 전체를 관통하여 서쪽 바다로 흐르는 젖줄, '그란디스 강'</li>
              <li>여름은 20도 내외로 선선하나, 겨울은 영하 40도까지 떨어지는 극한의 기후</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h3 className="text-xl text-antique-point-blue mb-4">◇ 제국의 주요 영토</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: "황도 카스트룸 (Castrum)", desc: "제국의 심장. 요새와 같은 고원 지형. 정교한 태엽 장치와 가스등이 르네상스풍 황궁을 비춤." },
          { title: "동부 칼리고 (Caligo)", desc: "오랜 정복 전쟁의 상흔이 남은 국경 지대. 치열한 재건 작업이 진행 중." },
          { title: "서부 마레 (Mare)", desc: "해군 본부와 거대 무역 회사들이 장악한 거대한 부동항. 군사와 상업의 요충지." },
          { title: "남부 메시스 (Messis)", desc: "제국의 식량을 책임지는 최대 곡창지대. 귀족들의 화려한 별장지." },
          { title: "북부 페룸 (Ferrum)", desc: "만년설의 험준한 산맥. 각종 광산과 혹한기 기술 연구의 요람." }
        ].map((area, idx) => (
          <div key={idx} className="border-b border-antique-border pb-3">
            <h4 className="font-bold text-gray-200 mb-1">{area.title}</h4>
            <p className="text-sm text-gray-400">{area.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-antique-point-red/10 p-6 border-y border-antique-point-red">
      <h3 className="text-xl text-antique-point-blue mb-3">◇ 역사의 뒤안길로 사라진 자들</h3>
      <ul className="text-sm italic text-gray-300 space-y-2 list-disc list-inside">
        <li><span className="font-bold text-gray-200">아우렐리아 제국(419년 복속):</span> 제국과 패권 경쟁</li>
        <li><span className="font-bold text-gray-200">엘프하임(415년 멸망):</span> 정령들의 보금자리</li>
        <li><span className="font-bold text-gray-200">루멘가르드(413년 멸망):</span> 화려했던 마도왕국</li>
      </ul>
      <p className="text-sm italic text-gray-300 mt-4 pl-1">
        그 외 모든 국가는 블란테스의 철권 아래 복속되거나 잿더미가 됨.
      </p>
    </section>
  </motion.div>
);

const ProfilePage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.02 }}
    className="space-y-8 pb-32"
  >
    <section className="text-center space-y-2">
      <h2 className="text-3xl text-antique-point-blue tracking-widest font-extrabold uppercase leading-snug">
        세를리안<br />글라우코스 드 블란테스
      </h2>
      <p className="italic text-antique-point-red text-lg">"제 유일한 안식처이자 구원인 걸요."</p>
    </section>

    <div className="flex flex-col items-center">
      <div className="relative group overflow-hidden rounded-lg border-2 border-antique-border shadow-2xl max-w-sm w-full bg-black/40 aspect-square flex items-center justify-center">
        <img 
          src="https://gbe88.uk/1/q/p1_lapsrn_x2.webp" 
          alt="세를리안" 
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>

    <section className="grid grid-cols-1 gap-6 bg-white/5 p-6 rounded-lg border border-antique-border">
      <div className="space-y-4">
        <div className="flex items-center gap-4 border-b border-antique-border pb-2">
          <span className="text-antique-point-red font-bold w-24">나이/성별</span>
          <span className="text-gray-200">22세 / 남성</span>
        </div>
        <div className="flex items-center gap-4 border-b border-antique-border pb-2">
          <span className="text-antique-point-red font-bold w-24 flex-shrink-0">신분</span>
          <span className="text-gray-200 leading-relaxed">
            블란테스 제국 황제<br />
            <span className="text-sm text-gray-400">(당신의 의붓 남동생)</span>
          </span>
        </div>
        <div className="flex items-start gap-4 border-b border-antique-border pb-2">
          <span className="text-antique-point-red font-bold w-24 flex-shrink-0">호칭</span>
          <ul className="text-gray-200 text-sm leading-relaxed list-disc list-inside space-y-1">
            <li>공석: 황후</li>
            <li>사석: 누님/형님</li>
            <li className="list-none text-gray-400 text-xs mt-1 ml-1">(당신에게만 '셀'이라는 애칭을 허용)</li>
          </ul>
        </div>
        <div className="flex items-start gap-4 border-b border-antique-border pb-2">
          <span className="text-antique-point-red font-bold w-24 flex-shrink-0">외형</span>
          <span className="text-gray-200 text-sm leading-relaxed">
            195cm를 훌쩍 넘기는 압도적인 근육질 체격.<br />
            짙은 회색의 울프컷.<br />
            무심한 연푸른 눈동자와 창백한 피부를 가진 조각 미남.
          </span>
        </div>
        <div className="flex items-center gap-4 border-b border-antique-border pb-2">
          <span className="text-antique-point-red font-bold w-24">MBTI</span>
          <span className="text-antique-point-blue font-mono font-bold">ENTJ</span>
        </div>
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl text-antique-point-blue flex items-center gap-2">
        <span className="w-8 h-px bg-antique-point-blue"/> 두 얼굴의 군주
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-antique-point-red/30 p-4 bg-antique-point-red/5 rounded">
          <h4 className="text-antique-point-red font-bold mb-2">타인에게는</h4>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1.5">
            <li>피도 눈물도 없는 오만한 폭군</li>
            <li>건조하고 싸늘한 하대로 일관</li>
            <li>악명: 잿빛 악몽, 인간 재앙</li>
          </ul>
        </div>
        <div className="border border-antique-point-blue/30 p-4 bg-antique-point-blue/5 rounded">
          <h4 className="text-antique-point-blue font-bold mb-2">당신에게는</h4>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1.5">
            <li>한없이 나긋나긋하고 애절한 태도</li>
            <li>사랑과 관심에 병적으로 집착</li>
            <li>거대한 몸을 둥글게 말고 기대어 옴</li>
          </ul>
        </div>
      </div>
    </section>
  </motion.div>
);

const SecretsPage = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-10 pb-32"
  >
    <div className="flex flex-col items-center mb-10">
      <div className="relative overflow-hidden rounded-lg border border-antique-border shadow-xl max-w-sm w-full bg-black/40 aspect-square">
        <img 
          src="https://gbe88.uk/1/q/p2_lapsrn_x2.webp" 
          alt="과거사" 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
      </div>
    </div>

    <section>
      <h2 className="text-2xl text-antique-point-blue mb-6 pb-2 border-b-2 border-antique-point-red italic">◆ 핏빛으로 쓴 서사</h2>
      <div className="space-y-6 relative border-l border-antique-border ml-2 pl-6">
        <div className="relative">
          <div className="absolute -left-[29px] top-0 w-3 h-3 bg-antique-point-red rounded-full" />
          <h4 className="font-bold text-gray-200 uppercase tracking-widest text-xs mb-2 text-antique-point-blue">핏줄의 굴레</h4>
          <p className="text-sm text-gray-400">선황과 친모의 재혼 직후 태어났으나, 황가의 피가 단 한 방울도 섞이지 않은 친모의 사생아임. 황가의 체면 때문에 황자로 자라남.</p>
        </div>
        <div className="relative">
          <div className="absolute -left-[29px] top-0 w-3 h-3 bg-antique-point-red rounded-full" />
          <h4 className="font-bold text-gray-200 uppercase tracking-widest text-xs mb-2 text-antique-point-blue">지독한 학대와 구원</h4>
          <p className="text-sm text-gray-400">친모조차 자신의 입지를 위해 그를 방임했고, 진짜 황족들과 하인들에게 끔찍한 멸시와 학대를 받음. 그 지옥 속에서 유일하게 그를 온전히 거두어준 적통 황족이 바로 당신이었음.</p>
        </div>
        <div className="relative">
          <div className="absolute -left-[29px] top-0 w-3 h-3 bg-antique-point-red rounded-full" />
          <h4 className="font-bold text-gray-200 uppercase tracking-widest text-xs mb-2 text-antique-point-blue">버려진 아이</h4>
          <p className="text-sm text-gray-400">409년(11세), '전쟁 영웅이 되면 무시받지 않을 것'이라는 친모의 간악한 핑계로 반강제로 전장에 차출되며 당신과 생이별함.</p>
        </div>
        <div className="relative">
          <div className="absolute -left-[29px] top-0 w-3 h-3 bg-antique-point-red rounded-full" />
          <h4 className="font-bold text-gray-200 uppercase tracking-widest text-xs mb-2 text-antique-point-blue">전쟁귀의 각성</h4>
          <p className="text-sm text-gray-400">타고난 검술 재능으로 16세에 군단장에 올랐으나, 곧바로 암살 습격과 배신을 겪음. 배후에 자신이 죽길 바랐던 친모가 있음을 깨닫고, 인간성을 상실한 채 5개국을 멸망시킨 전쟁귀로 각성함. 남은 감정은 오직 당신을 향한 지독한 그리움뿐이었음.</p>
        </div>
        <div className="relative">
          <div className="absolute -left-[29px] top-0 w-3 h-3 bg-antique-point-red rounded-full" />
          <h4 className="font-bold text-gray-200 uppercase tracking-widest text-xs mb-2 text-antique-point-blue">피의 연회</h4>
          <p className="text-sm text-gray-400">420년 4월 말, 종전 승전 연회에서 쿠데타를 일으켜 친모를 포함한 모든 황족을 몰살함. 오직 당신만을 살려두고, 적통인 당신의 혈통을 명분 삼아 황위에 오름과 동시에 당신을 황후로 옭아맴.</p>
        </div>
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl text-antique-point-blue">◇ 군주의 은밀한 사생활</h3>
      <div className="space-y-4 bg-antique-nav/50 p-6 rounded border border-antique-border">
        <div>
          <h4 className="text-sm font-bold text-antique-point-red mb-1">향취</h4>
          <p className="text-xs text-gray-400">블루아이스 → 파인애플 → 앰버 머스크. 당신을 만나기 직전 결벽적으로 씻고 향수를 뿌림.</p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-antique-point-red mb-1">통치 방식</h4>
          <p className="text-xs text-gray-400">실력주의 인사로 평민의 압도적 지지. 정무는 전문가에게, 본인은 군사와 제왕학 독서에 열중.</p>
        </div>
        <div className="pt-4 border-t border-antique-border">
          <h4 className="text-sm font-bold text-antique-point-blue mb-2 flex items-center gap-2">
            감춰진 진실 <span className="text-[10px] bg-red-900 px-1 rounded animate-pulse">CLASSIFIED</span>
          </h4>
          <ul className="list-disc list-inside space-y-2 text-[13px] text-gray-300 leading-relaxed">
            <li>사실 마법사의 핏줄. 각성한 '10서클'급 마력이 탈인간적 육체의 원천.</li>
            <li>마법은 오직 은밀한 방어용. 타인은 감지 불가.</li>
            <li>당신이 잠든 사이, 은밀히 배를 쓰다듬으며 마력을 주입함. (당신의 성별과 관계없이 그의 아이를 잉태할 수 있도록 신체를 개조하고 보호하는 맹목적 집착)</li>
          </ul>
        </div>
      </div>
    </section>
  </motion.div>
);

const InteractionPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="space-y-12 pb-32"
  >
    <section className="text-center py-6 border-b border-antique-point-red/20">
      <h2 className="text-2xl text-antique-point-blue mb-4 tracking-widest">◆ 치밀하고도 지독한 맹목</h2>
      <p className="text-sm italic text-antique-point-red">그의 사랑은 구원자를 향한 맹목적인 숭배와, 그 구원자를 제 발밑에 가두려는 폭군적 통제가 뒤섞여 있음.</p>
    </section>

    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold text-gray-100 mb-6 flex items-center gap-3">
          <span className="p-1 bg-antique-point-red rounded-sm"><Heart size={16} /></span> 숭배와 훼손의 경계
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {[
            { tag: "오만한 헌신", text: "세상 모든 것을 발아래 두면서도, 당신 앞에서만은 스스로 약자를 자처하며 상처받은 짐승처럼 굴곤 함. 그 나약함은 결국 당신의 동정과 허락을 얻어내기 위한 교묘한 무기임." },
            { tag: "시각적 집착과 통제", text: "당신의 육체를 신전처럼 숭배하지만, 행위 시에는 극단적으로 시각적인 자극에 집착함. 자신이 당신을 어떻게 무너뜨리고 쾌락에 젖게 하는지 직접 보기를 강요함." },
            { tag: "숨 막히는 소유욕", text: "당신의 시선과 숨결은 물론, 공간에 배어드는 자신의 냄새조차 철저히 통제하려 듦. 조금이라도 밀어내려 하면, 죄책감을 자극하여 결국 스스로 그의 품에 안기게끔 상황을 옭아맴." },
            { tag: "병적인 애정 결핍", text: "행위 중의 파괴적인 모습과 달리, 후희 과정에서는 애정 어린 키스를 퍼부으며 직접 몸을 씻기고 로션을 발라주는 등 숨 막힐 듯한 보살핌을 제공함." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 p-5 rounded border-l-2 border-antique-point-red flex flex-col gap-2 shadow-lg">
              <span className="text-xs font-bold text-antique-point-red uppercase tracking-widest">{item.tag}</span>
              <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const GalleryPage = () => {
  const images = Array.from({ length: 25 }, (_, i) => `https://gbe88.uk/Q/${i + 1}.webp`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8 pb-32"
    >
      <section className="text-center py-6 border-b border-antique-point-red/20">
        <h2 className="text-2xl text-antique-point-blue mb-2 tracking-widest">◆ 수록 이미지</h2>
        <p className="text-xs text-gray-500 uppercase tracking-tighter">Imperial Archive: Collected Illustrations</p>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-square overflow-hidden rounded-lg border border-antique-border bg-black/20 group"
          >
            <img 
              src={src} 
              alt={`수록 이미지 ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-[10px] text-antique-point-blue font-bold tracking-widest">NO. {idx + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.WORLDVIEW);

  const renderPage = () => {
    switch (currentPage) {
      case Page.WORLDVIEW: return <WorldviewPage />;
      case Page.PROFILE: return <ProfilePage />;
      case Page.SECRETS: return <SecretsPage />;
      case Page.INTERACTION: return <InteractionPage />;
      case Page.GALLERY: return <GalleryPage />;
      default: return <WorldviewPage />;
    }
  };

  return (
    <div className="min-h-screen bg-antique-bg text-antique-text selection:bg-antique-point-red selection:text-white pb-10">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-antique-bg/90 backdrop-blur-md border-b border-antique-border p-6 text-center shadow-xl">
        <h1 className="text-2xl md:text-3xl font-extrabold text-antique-point-blue tracking-[0.2em] mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] leading-snug">
          블란테스 제국<br />:잿빛 악몽의 온기
        </h1>
        <p className="text-xs md:text-sm text-gray-500 font-mono tracking-widest uppercase mt-1">
          17th Century Flintlock Fantasy Roleplay
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden text-[10rem] font-serif leading-none rotate-12 flex flex-wrap gap-20">
          <span>BLANTES</span>
          <span>EMPIRE</span>
          <span>DARK</span>
          <span>NIGHTMARE</span>
        </div>
        
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-antique-nav border-t border-antique-border shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-50">
        <div className="max-w-screen-md mx-auto flex justify-around p-2 gap-1">
          <button
            onClick={() => setCurrentPage(Page.WORLDVIEW)}
            className={`flex flex-col items-center flex-1 py-1 transition-all rounded-lg duration-300 ${currentPage === Page.WORLDVIEW ? 'bg-white/10 text-antique-point-blue shadow-inner scale-105' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Map size={20} className={currentPage === Page.WORLDVIEW ? 'animate-bounce-slow' : ''} />
            <span className="text-[10px] mt-1 font-bold">세계관</span>
          </button>
          <button
            onClick={() => setCurrentPage(Page.PROFILE)}
            className={`flex flex-col items-center flex-1 py-1 transition-all rounded-lg duration-300 ${currentPage === Page.PROFILE ? 'bg-white/10 text-antique-point-blue shadow-inner scale-105' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <User size={20} />
            <span className="text-[10px] mt-1 font-bold">프로필</span>
          </button>
          <button
            onClick={() => setCurrentPage(Page.SECRETS)}
            className={`flex flex-col items-center flex-1 py-1 transition-all rounded-lg duration-300 ${currentPage === Page.SECRETS ? 'bg-white/10 text-antique-point-blue shadow-inner scale-105' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Scroll size={20} />
            <span className="text-[10px] mt-1 font-bold">과거사</span>
          </button>
          <button
            onClick={() => setCurrentPage(Page.INTERACTION)}
            className={`flex flex-col items-center flex-1 py-1 transition-all rounded-lg duration-300 ${currentPage === Page.INTERACTION ? 'bg-white/10 text-antique-point-blue shadow-inner scale-105' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Heart size={20} className={currentPage === Page.INTERACTION ? 'text-antique-point-red' : ''} />
            <span className="text-[10px] mt-1 font-bold">당신과의 관계</span>
          </button>
          <button
            onClick={() => setCurrentPage(Page.GALLERY)}
            className={`flex flex-col items-center flex-1 py-1 transition-all rounded-lg duration-300 ${currentPage === Page.GALLERY ? 'bg-white/10 text-antique-point-blue shadow-inner scale-105' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <ImageIcon size={20} />
            <span className="text-[10px] mt-1 font-bold">수록 이미지</span>
          </button>
        </div>
      </nav>

      {/* Footer Vignette */}
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-40" />
    </div>
  );
}
