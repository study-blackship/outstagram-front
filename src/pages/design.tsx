import Avatar from 'src/design-system/ui/avatar/Avatar';
import NavigationBar from 'src/design-system/ui/navigation-bar/NavigationBar';

export default function design() {
  return (
    <div className="flex flex-col">
      <NavigationBar />

      <div className="avatar flex flex-nowrap overflow-x-scroll border-y-2 py-[10px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (avatarId) => (
            <Avatar key={avatarId}>Hello{avatarId}</Avatar>
          )
        )}
      </div>
    </div>
  );
}
