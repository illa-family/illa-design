export const illaPrefix = "illa"

export function globalColor(key: string): string {
  if (key == "transparent") {
    return "transparent"
  }
  return globalColorNormal.get(key) ?? ""
}

const globalColorNormal: Map<string, string> = new Map([
  ["--illa-white-01", "#fff"],
  ["--illa-white-03", "rgba(255, 255, 255, 0.75)"],
  ["--illa-white-02", "rgba(255, 255, 255, 0.9)"],
  ["--illa-white-07", "rgba(255, 255, 255, 0.12)"],
  ["--illa-white-09", "rgba(255, 255, 255, 0.04)"],
  ["--illa-white-08", "rgba(255, 255, 255, 0.08)"],
  ["--illa-gray-01", "#000"],
  ["--illa-gray-02", "#1f1f1f"],
  ["--illa-gray-03", "#5c5c5c"],
  ["--illa-gray-04", "#999"],
  ["--illa-gray-05", "#c2c2c2"],
  ["--illa-gray-06", "#d6d6d6"],
  ["--illa-white-04", "rgba(255, 255, 255, 0.5)"],
  ["--illa-gray-07", "#e0e0e0"],
  ["--illa-gray-08", "#ebebeb"],
  ["--illa-gray-09", "#f5f5f5"],
  ["--illa-white-06", "rgba(255, 255, 255, 0.2)"],
  ["--illa-grayBlue-01", "#454d5a"],
  ["--illa-white-05", "rgba(255, 255, 255, 0.3)"],
  ["--illa-grayBlue-02", "#81868f"],
  ["--illa-grayBlue-04", "#e2e4e6"],
  ["--illa-grayBlue-03", "#cbcdd1"],
  ["--illa-grayBlue-05", "#f3f5f7"],
  ["--illa-grayBlue-06", "#f9fafb"],
  ["--illa-blackAlpha-01", "rgba(0, 0, 0, 0.88)"],
  ["--illa-blackAlpha-02", "rgba(0, 0, 0, 0.64)"],
  ["--illa-blackAlpha-03", "rgba(0, 0, 0, 0.4)"],
  ["--illa-blackAlpha-04", "rgba(0, 0, 0, 0.24)"],
  ["--illa-blackAlpha-05", "rgba(0, 0, 0, 0.16)"],
  ["--illa-blackAlpha-06", "rgba(0, 0, 0, 0.12)"],
  ["--illa-blackAlpha-07", "rgba(0, 0, 0, 0.08)"],
  ["--illa-blackAlpha-08", "rgba(0, 0, 0, 0.04)"],
  ["--illa-techBlue-01", "#134ae0"],
  ["--illa-techBlue-02", "#175ceb"],
  ["--illa-techBlue-03", "#1e6fff"],
  ["--illa-techBlue-04", "#5c99ff"],
  ["--illa-techBlue-05", "#99beff"],
  ["--illa-techBlue-06", "#c2d8ff"],
  ["--illa-techBlue-n-01", "#083bc7"],
  ["--illa-techBlue-07", "#edf4ff"],
  ["--illa-blue-02", "#3e53eb"],
  ["--illa-blue-01", "#2a3ed6"],
  ["--illa-blue-03", "#546dff"],
  ["--illa-blue-04", "#7691ff"],
  ["--illa-blue-05", "#aebeff"],
  ["--illa-blue-06", "#d2dbff"],
  ["--illa-blue-07", "#f1f4ff"],
  ["--illa-blue-n-01", "#1e29bd"],
  ["--illa-purple-01", "#833fdf"],
  ["--illa-purple-02", "#8e4be0"],
  ["--illa-purple-03", "#a55bf5"],
  ["--illa-purple-04", "#c87ffa"],
  ["--illa-purple-05", "#dfb2fc"],
  ["--illa-purple-06", "#f0d6fe"],
  ["--illa-purple-07", "#fbf2fe"],
  ["--illa-purple-n-01", "#6f2fc4"],
  ["--illa-red-01", "#e02424"],
  ["--illa-red-02", "#eb3639"],
  ["--illa-red-03", "#ff4747"],
  ["--illa-red-04", "#ff7272"],
  ["--illa-red-05", "#ffa3a3"],
  ["--illa-red-06", "#fcc"],
  ["--illa-red-07", "#fee"],
  ["--illa-red-n-01", "#c21f1f"],
  ["--illa-green-01", "#007a41"],
  ["--illa-green-02", "#118f58"],
  ["--illa-green-03", "#00aa5b"],
  ["--illa-green-04", "#00d689"],
  ["--illa-green-05", "#66dfb0"],
  ["--illa-green-06", "#a3f0d4"],
  ["--illa-green-07", "#ecfbf5"],
  ["--illa-green-n-01", "#006134"],
  ["--illa-yellow-01", "#e07800"],
  ["--illa-yellow-02", "#eb9000"],
  ["--illa-yellow-03", "#ffab00"],
  ["--illa-yellow-04", "#ffcd00"],
  ["--illa-yellow-05", "#ffe266"],
  ["--illa-yellow-06", "#fff2a3"],
  ["--illa-yellow-07", "#fffceb"],
  ["--illa-yellow-n-01", "#c76b00"],
  ["--illa-orange-01", "#e03118"],
  ["--illa-orange-02", "#eb4825"],
  ["--illa-orange-03", "#ff5e2f"],
  ["--illa-orange-04", "#ff8246"],
  ["--illa-orange-05", "#ffb490"],
  ["--illa-orange-06", "#ffd7bf"],
  ["--illa-orange-07", "#fff5f0"],
  ["--illa-orange-n-01", "#c72c15"],
  ["--illa-cyan-01", "#069fcc"],
  ["--illa-cyan-02", "#08a7cc"],
  ["--illa-cyan-03", "#0cc1e2"],
  ["--illa-cyan-04", "#12ddf2"],
  ["--illa-cyan-05", "#71ebf7"],
  ["--illa-cyan-06", "#aaf7fc"],
  ["--illa-cyan-n-01", "#058bb2"],
  ["--illa-cyan-07", "#effdfe"],
  ["--illa-brand-01", "#654aec"],
  ["--illa-brand-02", "#ff58be"],
])