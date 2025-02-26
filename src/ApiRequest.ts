const apiRequest = async (
  url = "",
  optionsObj: any = null,
  errMsg: any = null
) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("Please reload app");
  } catch (err) {
    // errMsg = err as Object.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
