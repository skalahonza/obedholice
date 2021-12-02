namespace ObedyHolice.BL.Interfaces
{
    public interface IRestaurant
    {
        /// <summary>
        /// Name of the restaurant.
        /// </summary>
        string Name { get; }

        /// <summary>
        /// The restaurant SubTitle.
        /// </summary>
        string SubTitle { get; }

        /// <summary>
        /// The restaurant's menu website.
        /// </summary>
        string Website { get; }

        /// <summary>
        /// Fetches menu items for current day.
        /// </summary>
        /// <returns></returns>
        Task<List<string>> GetMenuItems();
    }
}