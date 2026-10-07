// Custom bangs checked before the full DuckDuckGo list. They take priority
// over bangs with the same trigger, and matching one skips loading the
// (large) full list entirely, so these redirect fastest.
export const customBangs = [
  {
    t: "pr",
    d: "github.com/Pisolutions-consultant/pimq/pulls",
    u: "https://github.com/Pisolutions-consultant/pimq/pull/{{{s}}}",
  },
  {
    t: "j",
    d: "pimq.atlassian.net",
    u: "https://pimq.atlassian.net/browse/CA-{{{s}}}",
  },
];
