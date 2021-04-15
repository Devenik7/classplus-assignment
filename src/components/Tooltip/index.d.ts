export interface TooltipProps {

    /**
     * The Content to be rendered and to attach the mouse event listener
     */
    children: React.ReactNode;

    /**
     * The content to be shown inside the tooltip
     */
    tip: React.ReactNode;

}

declare const Tooltip: React.ComponentType<TooltipProps>;

export default Tooltip;