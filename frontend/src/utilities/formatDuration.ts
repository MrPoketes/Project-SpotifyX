export const formatDuration = (duration: number): string => {
	const seconds = duration * 0.001;
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = Math.round(seconds - minutes * 60).toString();
	if (remainingSeconds.length === 1) {
		return `${minutes}:${remainingSeconds}0`;
	}
	return `${minutes}:${remainingSeconds}`;
};
