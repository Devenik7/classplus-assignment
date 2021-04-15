export interface DrawerProps {

    /**
     * The Content to be rendered inside the Drawer
     */
    children: React.ReactNode;

    /**
     * Controls whether the Drawer should be rendered or not
     */
    visible: Boolean;

}

declare const Drawer: React.ComponentType<DrawerProps>;

export default Drawer;