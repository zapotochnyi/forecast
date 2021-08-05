import animate from "animateplus";

export const appAnimation = () => {
  animate({
    elements: [
      document.getElementById("detailed_forecast"),
      document.getElementById("description"),
      document.getElementById("weather_icon"),
    ],
    easing: "out-quartic",
    duration: 1000,
    opacity: [0, 1],
    transform: ["translateY(30px)", 0],
  }).then(() =>
    animate({
      elements: document.getElementById("weather_icon"),
      easing: "linear",
      duration: 2000,
      loop: true,
      transform: ["translateY(0px)", 20],
      direction: "alternate",
    })
  );
};
