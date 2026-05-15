using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Text;

namespace Umbraco.ViteTailwind.Helpers;

public static class ViteHtmlHelpers
{
    public static HtmlString ViteAssets(this IHtmlHelper html)
    {
        #if DEBUG

                var sb = new StringBuilder();

                sb.AppendLine("<script type=\"module\" src=\"http://localhost:5173/@vite/client\"></script>");
                sb.AppendLine("<script type=\"module\" src=\"http://localhost:5173/scripts/app.ts\"></script>");

                return new HtmlString(sb.ToString());

        #else

                var sb = new StringBuilder();

                sb.AppendLine("<link rel=\"stylesheet\" href=\"/dist/css/site.css\" />");
                sb.AppendLine("<script type=\"module\" src=\"/dist/js/app.js\"></script>");

                return new HtmlString(sb.ToString());

        #endif
    }
}