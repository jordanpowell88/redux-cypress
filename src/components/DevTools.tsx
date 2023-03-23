import { createDevTools } from "@redux-devtools/core";
import { DockMonitor } from "@redux-devtools/dock-monitor";
import { LogMonitor } from "@redux-devtools/log-monitor";

export default createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor />
    </DockMonitor>
)