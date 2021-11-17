namespace ObedyHolice.BL.Extensions
{
    public static class UriExtensions
    {
        public static Uri Append(this Uri uri, params string[] paths) =>
            new(paths.Aggregate(uri.AbsoluteUri, (current, path) => string.Format("{0}/{1}", current.TrimEnd('/'), path.TrimStart('/'))));
    }
}
