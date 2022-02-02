export const ApiReddit = 'https://www.reddit.com';

export const getSubredditPosts = async (s) => {
  const response = await fetch(`${ApiReddit}${s}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${ApiReddit}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((s) => s.data);
};

export const getPostComments = async (link) => {
  const response = await fetch(`${ApiReddit}${link}.json`);
  const json = await response.json();

  return json[1].data.children.map((s) => s.data);
};
