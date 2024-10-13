import React, { forwardRef, ReactNode, useMemo, useRef } from 'react';
import { ViewStyle } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';


interface Props {
    children: ReactNode;
    style: ViewStyle;
}

type Ref = BottomSheetModal;

export const AppBottomSheet = forwardRef<Ref, Props>(({ children, style = {} }, ref) => {
    const snapPoints = useMemo(() => ['40%'], []);
    const renderBackdrop = (props: any) => (
        <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
    )
    return (
        <BottomSheetModal
            ref={ref}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            handleIndicatorStyle={{ display: 'none' }}
            style={{backgroundColor: "#ffffff"}}
        >
            <BottomSheetView style={{...style}}>
                {children}
            </BottomSheetView>
        </BottomSheetModal>
    )
})