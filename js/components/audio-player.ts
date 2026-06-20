/**
 * audio-player.js — Dani Braga Design
 * Player flutuante com animação de ondas
 */

const AudioPlayer = (() => {
  let player, btn, audio, title, bars;
  let isPlaying = false;
  const DEFAULT_TRACK = {
    src:   'assets/audio/ambient.mp3',
    title: 'Atmosfera do estúdio',
  };

  /* ─── INIT ───────────────────────────────── */

  function init() {
    player = document.querySelector('.audio-player');
    if (!player) return;

    btn   = player.querySelector('.audio-player__btn');
    title = player.querySelector('.audio-player__title');
    bars  = player.querySelectorAll('.audio-player__bar');

    const trackSrc   = player.dataset.src   || DEFAULT_TRACK.src;
    const trackTitle = player.dataset.title || DEFAULT_TRACK.title;

    if (title) title.textContent = trackTitle;

    audio = new Audio(trackSrc);
    audio.loop   = true;
    audio.volume = 0.35;

    // Garante pausa antes de sair da página
    audio.addEventListener('ended', () => setPlaying(false));
    btn?.addEventListener('click', togglePlay);

    // Respeita preferência de movimento reduzido
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      bars.forEach(b => b.style.animationDuration = '0s');
    }
  }

  /* ─── CONTROLES ──────────────────────────── */

  function togglePlay() {
    isPlaying ? pause() : play();
  }

  function play() {
    audio.play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Autoplay bloqueado — aguarda interação
        console.warn('[AudioPlayer] Autoplay blocked by browser.');
      });
  }

  function pause() {
    audio.pause();
    setPlaying(false);
  }

  function setPlaying(state) {
    isPlaying = state;
    player.classList.toggle('is-playing', state);
    btn?.setAttribute('aria-label', state ? 'Pausar música ambiente' : 'Tocar música ambiente');
  }

  /* ─── VOLUME ──────────────────────────────── */

  function setVolume(val) {
    if (!audio) return;
    audio.volume = Math.max(0, Math.min(1, val));
  }

  return { init, play, pause, setVolume };
})();

export default AudioPlayer;
