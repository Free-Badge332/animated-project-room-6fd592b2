const model = { url: "/__l5e/assets-v1/da238aa4-edcd-4f40-9919-1acdb51c97a1/room.glb" };
const titleFont = { url: "/__l5e/assets-v1/b3af163d-f866-4538-a005-b180fbd103ef/unione.json" };
const subtitleFont = { url: "/__l5e/assets-v1/8e0cd439-4b22-41be-8e63-715d47f84789/helvatica.json" };
const screenVideo = { url: "/__l5e/assets-v1/b9374180-d97e-40b0-8bfa-f79a508f9167/arcane.mp4" };
const logo = { url: "/__l5e/assets-v1/1932e9a0-e0db-48ed-a9da-b41af7d284da/logo-e.png" };
const adminAndMobile = { url: "/__l5e/assets-v1/f522952c-603d-4642-829c-ff9e9909813c/adminandmobile.jpg" };
const proshop = { url: "/__l5e/assets-v1/19da2d37-fe02-4f26-a3a4-e2e7bfc10b27/proshop.png" };
const myTeachers = { url: "/__l5e/assets-v1/af044c0d-170c-4db9-aab5-1a838ce8cb96/project-myteachers.webp" };
const wholesale = { url: "/__l5e/assets-v1/18fae94c-57b4-435c-8512-75b10c852b21/project-wholesale.jpg" };
const chatApp = { url: "/__l5e/assets-v1/b64e683f-67df-4b8d-8985-038e6ecf8c50/chatApp.jpg" };
const audio = { url: "/__l5e/assets-v1/58ec52dd-f773-4966-9aa2-d18b06d3b995/audio.png" };

export const roomAssets = {
  model: model.url,
  titleFont: titleFont.url,
  subtitleFont: subtitleFont.url,
  screenVideo: screenVideo.url,
  logo: logo.url,
};

export type RoomProject = { image: string; url: string; mobileUrl?: string };

export const roomProjects: RoomProject[] = [
  { image: adminAndMobile.url, url: "https://aregenkibet.web.app", mobileUrl: "https://adminpanel-bx43q6fid-ezadin-badrus-projects.vercel.app/" },
  { image: proshop.url, url: "https://github.com/ezadin2/proshop-demo.git" },
  { image: myTeachers.url, url: "https://abuanwar072.github.io/Flutter-Responsive-Admin-Panel-or-Dashboard/" },
  { image: wholesale.url, url: "https://github.com/ezadin2/Flight-Booking-App-Flutter.git" },
  { image: chatApp.url, url: "https://github.com/ezadin2/nextjs-setup" },
  { image: audio.url, url: "https://github.com/ezadin2/Audio-player.git" },
  { image: "/__l5e/assets-v1/b926f406-f5ea-48b8-9d6d-1a6b8abce455/quran.png", url: "https://hasset-delivery-front-end-side.onrender.com/" },
  { image: "/__l5e/assets-v1/a598b8a3-30c9-4430-b0fc-e0fda7b6c60b/techxpert.png", url: "https://techxpert-rental-market-place.vercel.app/" },
  { image: "/__l5e/assets-v1/416740ab-a7d3-416f-840c-7d70fdad3355/my-quran-onrender.png", url: "https://my-quran.onrender.com/" },
  { image: "/__l5e/assets-v1/9389622c-eb9f-42f6-94d8-c1062be94c64/qemer.png", url: "https://qemer-final-project.vercel.app/" },
  { image: "/__l5e/assets-v1/7acd8cb1-6a3f-46a8-9f8b-2fd6825b6e05/qemer-fb.png", url: "https://ezadin2.github.io/qemer_tech_project_facebookpage/" },
];

export const ROOM_PAGE_SIZE = 6;
