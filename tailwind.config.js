/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "rainy-day":
          'url("https://wallpapercrafter.com/desktop1/659101-rain-nature-wet-variety-weather-drop-water-rainy.jpg")',
        "sunny-day": 'url("https://cdn.wallpapersafari.com/60/31/1Hnzcy.jpg")',
        "cloudy-day":
          'url("https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=")',
        "windy-day":
          'url("https://images.unsplash.com/photo-1470176519524-3c2f481c8c9c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZHklMjBkYXl8ZW58MHx8MHx8fDA%3D")',
        "snowy-day":
          'url("https://www.wallpaperflare.com/static/1010/516/986/snow-trees-road-traces-wallpaper.jpg")',
        "hazy-day":
          'url("https://c.pxhere.com/photos/58/cb/road_curve_wet_rainy_forest_fog_misty_nature-1087386.jpg!s2")',
      },
    },
  },
  plugins: [],
};
