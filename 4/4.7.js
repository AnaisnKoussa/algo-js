function elevator (leftElevatorCurrentFloor, rightElevatorCurrentFloor, requestedFloor) {
    
    let diffLeft = Math.abs(requestedFloor - leftElevatorCurrentFloor);
    let diffRight = Math.abs(requestedFloor - rightElevatorCurrentFloor);

    if (diffLeft < diffRight) {
        return 'Left';
    } else {
        return 'Right';
    }
}

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"