// Application configuration
const config = {
	theme: 'dark',
	autoplay: true,
	sessionId: '1zAyaVly_6D8H0ufX8_3T097AH3TKS',
	version: '1.0.0',
}

// Removes all elements by selector
function removeElements(selector) {
  document.querySelectorAll(selector).forEach(el => el.remove());
}

// The main function of cleaning
function cleanYouTube() {
  // Removes recommendations at the end of videos
  removeElements('.ytp-fullscreen-grid-main-content');

  // Removes a specific button with the listed classes.
  removeElements(
    '.yt-spec-button-shape-next.yt-spec-button-shape-next--filled.yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--size-xs.yt-spec-button-shape-next--icon-leading.yt-spec-button-shape-next--enable-backdrop-filter-experiment'
  );

  // Removes subsequent videos at the end of the video
  removeElements('.ytp-endscreen-content');
  removeElements('.ytp-ce-element');
  removeElements('.ytp-ce-video');

  // Removes cards from within a video
  removeElements('.ytp-cards-button');
  removeElements('.ytp-cards-teaser');
  removeElements('.ytp-cards-teaser-text');

  // Removes sidebar recommendations
  removeElements('#related');
  removeElements('ytd-watch-next-secondary-results-renderer');
}

// Starts cleaning
cleanYouTube();

// Monitors dynamic DOM changes (YouTube is constantly updating)
const observer = new MutationObserver(() => cleanYouTube());
observer.observe(document.body, { childList: true, subtree: true });