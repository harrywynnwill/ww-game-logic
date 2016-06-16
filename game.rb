require 'byebug'
class Game

  def initialize(player_number, player_class=Player)
    @player_number = player_number
    @player_class = player_class
    @time = "night"
    @ingame_werewolf_count = nil
    @ingame_villager_count = nil
    @players = []
    @player_names = []
    @dead_players = []
  end

  def play
    set_up
    tell_roles
    until win_condition? do
      if day?
        day_vote
      else
        night_vote
      end
      head_count
      update_time
    end
    puts "The game is over!"
  end

  private

  # def tell_roles
  #   @players.each do |player|
  #     puts "You are a #{player.role}, #{player.name}"
  #   end
  # end
  #
  # def get_names
  #   @players.each do |player|
  #     @player_names << player.name
  #   end
  # end

 #DUCK TYPE FOR THIS IN JS PLEASE
  def day_vote
    puts "Its day time"
    @players.each do |player|
      unless player.dead?
        player.make_vote
        unless @player_names.include?(player.vote)
          puts "You must kill someone in the game!"
          player.make_vote
        end
        if @dead_players.include?(player.vote)
          puts "You must kill someone in the game!"
          player.make_vote
        end
      end
    end
    vote_count = Hash.new(0)
    @players.each { |player| vote_count[player.vote] += 1 }
    highest_vote = vote_count.max_by{ |k,v| v }
    highest_vote = highest_vote.delete_if {|item| item.is_a?(Integer)}
    if highest_vote.length == 1
    	@players.each do |player|
        if player.name == highest_vote[0]
          player.kill
          @dead_players << player.name
          puts "#{player.name} has been killed!"
        end
      end
    else
      @players.each do |player|
        if player.name == highest_vote[rand(0..highest_vote.length)]
          player.kill
          @dead_players << player.name
          puts "#{player.name} has been killed!"
        end
      end
    end
  end

   #DUCK TYPE FOR THIS IN JS PLEASE
  def night_vote
    puts "Its night time"
    @players.each do |player|
      unless player.dead?
        if player.role == "werewolf"
          player.make_vote
          unless @player_names.include?(player.vote)
            puts "You must kill someone in the game!"
            player.make_vote
          end
        end
      end
    end
    vote_count = Hash.new(0)
    @players.each do |player|
      if player.role == "werewolf"
        vote_count[player.vote] += 1
      end
    end
    highest_vote = vote_count.max_by{ |k,v| v }
    highest_vote = highest_vote.delete_if {|item| item.is_a?(Integer)}
    if highest_vote.length == 1
    	@players.each do |player|
        if player.name == highest_vote[0]
          player.kill
          @dead_players << player.name
          puts "#{player.name} has been killed!"
        end
      end
    else
      @players.each do |player|
        if player.name == highest_vote[rand(0..highest_vote.length)]
          player.kill
          @dead_players << player.name
          puts "#{player.name} has been killed!"
        end
      end
    end
  end

  # def update_time
  #   @time == "day" ? @time = "night" : @time = "day"
  # end
  #
  # def day?
  #   @time == "day"
  # end

  # def initial_head_count
  #   @ingame_werewolf_count = @wolf_number
  #   @ingame_villager_count = @villager_number
  # end

  # def head_count
  #   @ingame_werewolf_count = 0
  #   @ingame_villager_count = 0
  #   @players.each do |player|
  #     unless player.dead?
  #       if player.role == "werewolf"
  #         @ingame_werewolf_count += 1
  #       elsif player.role == "villager"
  #         @ingame_villager_count += 1
  #       end
  #     end
  #   end
  # end
  #
  # def win_condition?
  #   @ingame_werewolf_count == @ingame_villager_count || @ingame_werewolf_count == 0
  # end

  def set_up
    name_players
    assign_roles
    initial_head_count
    get_names
  end
  #
  # def how_many_wolves(number)
  #   @wolf_number = (number/4).floor
  # end
  #
  # def how_many_villagers
  #   @villager_number = @player_number - @wolf_number
  # end
  #
  # def name_players
  #   @player_number.times do
  #     puts "Whats your name?"
  #     name = gets.chomp
  #     player = @player_class.new(name)
  #     @players << player
  #   end
  # end

  # def assign_roles
  #   how_many_wolves(@player_number)
  #   how_many_villagers
  #   role_array = []
  #   @wolf_number.times { role_array << "werewolf" }
  #   @villager_number.times { role_array << "villager" }
  #   role_hash = Hash[@players.zip(role_array.shuffle)]
  #   assign(role_hash)
  # end
#
#   def assign(role_hash)
#     role_hash.each do |player, role|
#     player.assign(role)
#     end
#   end
# end


class Player
  attr_reader :role, :vote, :name
  def initialize(name)
    @name = name
    @role = nil
    @dead = false
    @vote = nil
  end

  def make_vote
    puts "Who would you like to kill, #{self.name}?"
    @vote = gets.chomp
  end
  #
  # def dead?
  #   @dead
  # end
  #
  # def kill
  #   @dead = true
  # end
  #
  # def assign(role)
  #   @role = role
  # end
end
