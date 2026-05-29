async function run() {
  try {
    const res = await fetch("https://api.shuaibiliuyuzhou.xyz/v1/models", {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });
    console.log(res.status);
    console.log(await res.text());
  } catch(e) {
    console.error(e);
  }
}
run();
