chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
	  id: "search-images",
	  title: "Search Google Images for '%s'",
	  contexts: ["selection"]
	});
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === "search-images") {
	  const searchTerm = encodeURIComponent(info.selectionText);
	  const url = `https://www.google.com/search?tbm=isch&q=${searchTerm}`;
	  chrome.tabs.create({ url });
	}
  });
  