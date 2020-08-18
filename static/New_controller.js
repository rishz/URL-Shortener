[HttpPost]
public JsonResult GetShortURL(string longUrl)
{
    WebRequest request = WebRequest.Create("https://www.googleapis.com/urlshortener/v1/url?key=YOUR_API_KEY_HERE");
    request.Method = "POST";
    request.ContentType = "application/json";
    string requestData = string.Format(@"{{""longUrl"": ""{0}""}}", longUrl);
    byte[] requestRawData = Encoding.ASCII.GetBytes(requestData);
    request.ContentLength = requestRawData.Length;
    Stream requestStream = request.GetRequestStream();
    requestStream.Write(requestRawData, 0, requestRawData.Length);
    requestStream.Close();

    WebResponse response = request.GetResponse();
    StreamReader responseReader = new StreamReader(response.GetResponseStream());
    string responseData = responseReader.ReadToEnd();
    responseReader.Close();

    var deserializer = new JavaScriptSerializer();
    var results = deserializer.Deserialize<GoogleResponse>(responseData);
    return Json(results.Id);
}

public class GoogleResponse
{
    public string Kind { get; set; }
    public string Id { get; set; }
    public string LongUrl { get; set; }
}