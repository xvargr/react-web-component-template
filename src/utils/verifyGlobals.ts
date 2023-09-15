export default function verifyConfig() {
  const requiredGlobalVars = [
    "agent_name",
    "profile_pic",
    "socket_url",
    "socket_auth",
    "socket_custom_header",
    "notification_sfx",
  ];

  requiredGlobalVars.forEach((variable) => {
    if (!(variable in window)) {
      throw new Error(`required global variable ${variable} is not defined`);
    }
  });
}
